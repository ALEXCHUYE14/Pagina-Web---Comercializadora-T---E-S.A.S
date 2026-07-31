-- =====================================================================
-- COMERCIALIZADORA T&E S.A.S.  —  Migración 04: SEGUIMIENTO PÚBLICO DE PEDIDOS
-- Permite que un cliente anónimo consulte el estado de SU PROPIA cotización
-- desde la landing, sin exponer la tabla completa de quote_requests.
-- La tabla NO gana ninguna política de SELECT pública: el único camino de
-- lectura es esta función, y sólo devuelve resultado si el cliente conoce
-- a la vez su correo Y su código de seguimiento (últimos 8 caracteres del
-- id de la cotización, mostrado en la landing tras enviar el formulario).
-- Ejecutar DESPUÉS de 01_schema.sql, 02_rls_policies.sql y 03_seed.sql.
-- =====================================================================
create or replace function public.track_quote_status(p_code text, p_email text)
returns table (
  status                  text,
  company_name            text,
  total_meters_requested  numeric,
  created_at              timestamptz
)
language sql
security definer
stable
set search_path = public
as $$
  select status, company_name, total_meters_requested, created_at
  from public.quote_requests
  where lower(email) = lower(trim(p_email))
    and id::text ilike '%' || lower(trim(p_code)) || '%'
  order by created_at desc
  limit 1;
$$;

comment on function public.track_quote_status(text, text) is
  'Consulta segura de estado de cotización para clientes anónimos: requiere código + email exactos, sólo expone campos no sensibles.';

revoke all on function public.track_quote_status(text, text) from public;
grant execute on function public.track_quote_status(text, text) to anon, authenticated;
