-- =====================================================================
-- COMERCIALIZADORA T&E S.A.S.  —  Migración 05: CAMPOS DE ENTREGA Y ENVÍO
-- Agrega a quote_requests los datos de entrega capturados en el nuevo
-- checkout (método de entrega + dirección). Columnas nullable y con
-- valores por defecto seguros: no rompe filas existentes.
-- Ejecutar DESPUÉS de 01_schema.sql .. 04_order_tracking.sql.
-- =====================================================================
alter table public.quote_requests
  add column if not exists delivery_method     text default 'shipping'
                              check (delivery_method in ('shipping','pickup')),
  add column if not exists shipping_address     text,
  add column if not exists shipping_address2    text,
  add column if not exists shipping_city        text,
  add column if not exists shipping_department  text;

comment on column public.quote_requests.delivery_method is 'Método de entrega elegido en el checkout: shipping (envío) o pickup (recoger en bodega)';
comment on column public.quote_requests.shipping_address is 'Dirección de envío (calle, número)';
comment on column public.quote_requests.shipping_address2 is 'Complemento de dirección: casa, apartamento, oficina';
comment on column public.quote_requests.shipping_city is 'Ciudad de entrega';
comment on column public.quote_requests.shipping_department is 'Departamento de entrega (Colombia)';
