-- =====================================================================
-- COMERCIALIZADORA T&E S.A.S.  —  Migración 03: DATOS DE EJEMPLO
-- Ejecutar DESPUÉS de 01_schema.sql. Idempotente (on conflict do nothing).
-- Reemplaza las imágenes Unsplash por tu propio CDN en producción.
-- =====================================================================
insert into public.textile_catalog
  (sku, name, fabric_type, grammage_gsm, width_meters, roll_length_meters, stock_status, price_per_meter, image_url)
values
  ('TE-ALG-180','Algodón Jersey Premium',    'Algodón',   180,1.80,100,'in_stock',      8500.00,'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80'),
  ('TE-POL-220','Poliéster Micro Sport',      'Poliéster', 220,1.60,100,'in_stock',      6200.00,'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&q=80'),
  ('TE-MEZ-240','Mezcla Oxford Corporativa',  'Mezcla',    240,1.50,100,'on_demand',    11200.00,'https://images.unsplash.com/photo-1594938328870-9623159c8c99?w=600&q=80'),
  ('TE-LIN-160','Lino Europeo Natural',       'Lino',      160,1.40,50, 'in_stock',     18900.00,'https://images.unsplash.com/photo-1528575950036-63c4853d3f6f?w=600&q=80'),
  ('TE-ALG-320','Algodón Denim Industrial',   'Algodón',   320,1.55,80, 'out_of_stock', 14500.00,'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=600&q=80'),
  ('TE-POL-140','Poliéster Forro Ligero',     'Poliéster', 140,1.50,100,'in_stock',      4300.00,'https://images.unsplash.com/photo-1567696153798-9111f9cd3d0d?w=600&q=80'),
  ('TE-MEZ-280','Mezcla Gabardina Uniformes', 'Mezcla',    280,1.50,100,'in_stock',     12800.00,'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80'),
  ('TE-ALG-200','Algodón Piqué Polo',         'Algodón',   200,1.70,100,'on_demand',     9700.00,'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&q=80')
on conflict (sku) do nothing;
