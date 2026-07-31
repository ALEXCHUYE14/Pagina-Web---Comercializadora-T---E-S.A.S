-- =====================================================================
-- COMERCIALIZADORA T&E S.A.S.  —  Migración 02: ROW LEVEL SECURITY
-- Ejecutar DESPUÉS de 01_schema.sql
-- =====================================================================
alter table public.textile_catalog enable row level security;
alter table public.quote_requests  enable row level security;
alter table public.quote_items     enable row level security;

-- textile_catalog: lectura pública de productos activos ---------------
drop policy if exists "catalog_public_read" on public.textile_catalog;
create policy "catalog_public_read" on public.textile_catalog
  for select to anon, authenticated using (is_active = true);

-- textile_catalog: escritura sólo staff autenticado ------------------
drop policy if exists "catalog_auth_write" on public.textile_catalog;
create policy "catalog_auth_write" on public.textile_catalog
  for all to authenticated using (true) with check (true);

-- quote_requests: inserción pública (anon puede cotizar) -------------
drop policy if exists "quote_requests_public_insert" on public.quote_requests;
create policy "quote_requests_public_insert" on public.quote_requests
  for insert to anon, authenticated with check (true);

-- quote_requests: lectura / gestión sólo staff -----------------------
drop policy if exists "quote_requests_auth_read" on public.quote_requests;
create policy "quote_requests_auth_read" on public.quote_requests
  for select to authenticated using (true);
drop policy if exists "quote_requests_auth_update" on public.quote_requests;
create policy "quote_requests_auth_update" on public.quote_requests
  for update to authenticated using (true) with check (true);

-- quote_items: inserción pública, lectura sólo staff -----------------
drop policy if exists "quote_items_public_insert" on public.quote_items;
create policy "quote_items_public_insert" on public.quote_items
  for insert to anon, authenticated with check (true);
drop policy if exists "quote_items_auth_read" on public.quote_items;
create policy "quote_items_auth_read" on public.quote_items
  for select to authenticated using (true);
