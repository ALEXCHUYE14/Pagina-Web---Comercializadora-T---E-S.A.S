-- =====================================================================
-- COMERCIALIZADORA T&E S.A.S.  —  Migración 01: ESQUEMA
-- Tablas base del catálogo textil y del sistema de cotizaciones.
-- Ejecutar primero en: Supabase -> SQL Editor -> Run
-- =====================================================================
create extension if not exists "pgcrypto";  -- gen_random_uuid()

-- 1. Catálogo de telas ------------------------------------------------
create table if not exists public.textile_catalog (
  id                  uuid primary key default gen_random_uuid(),
  sku                 text unique not null,
  name                text not null,
  fabric_type         text,                                   -- 'Algodón','Poliéster','Mezcla','Lino'
  grammage_gsm        integer not null,
  width_meters        numeric(4,2) not null,
  roll_length_meters  integer default 100,
  stock_status        text not null default 'in_stock'
                        check (stock_status in ('in_stock','on_demand','out_of_stock')),
  price_per_meter     numeric(10,2),
  image_url           text,
  is_active           boolean not null default true,
  created_at          timestamptz not null default now()
);
comment on table public.textile_catalog is 'Catálogo público de telas T&E para cotización B2B';
create index if not exists idx_catalog_fabric_type  on public.textile_catalog (fabric_type);
create index if not exists idx_catalog_stock_status on public.textile_catalog (stock_status);
create index if not exists idx_catalog_grammage     on public.textile_catalog (grammage_gsm);

-- 2. Solicitudes de cotización ---------------------------------------
create table if not exists public.quote_requests (
  id                      uuid primary key default gen_random_uuid(),
  company_name            text not null,
  tax_id                  text,                               -- NIT / RUC / RUT
  contact_name            text not null,
  email                   text not null,
  phone                   text not null,
  total_meters_requested  numeric(10,2),
  status                  text not null default 'pending'
                            check (status in ('pending','contacted','quoted','archived')),
  notes                   text,
  source                  text default 'landing',
  created_at              timestamptz not null default now()
);
comment on table public.quote_requests is 'Solicitudes de cotización enviadas desde la landing';
create index if not exists idx_quote_requests_status     on public.quote_requests (status);
create index if not exists idx_quote_requests_created_at on public.quote_requests (created_at desc);
create index if not exists idx_quote_requests_email      on public.quote_requests (email);

-- 3. Detalle de telas por cotización ---------------------------------
create table if not exists public.quote_items (
  id                uuid primary key default gen_random_uuid(),
  quote_id          uuid not null references public.quote_requests(id) on delete cascade,
  product_id        uuid references public.textile_catalog(id) on delete set null,
  product_name      text,
  requested_meters  numeric(10,2) not null,
  selected_pantone  text,
  created_at        timestamptz not null default now()
);
comment on table public.quote_items is 'Líneas de detalle (telas + metros) de cada cotización';
create index if not exists idx_quote_items_quote_id   on public.quote_items (quote_id);
create index if not exists idx_quote_items_product_id on public.quote_items (product_id);
