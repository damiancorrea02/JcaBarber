INSERT INTO servicios (nombre, precio, duracion)
VALUES
('Corte', 12000, 30),
('Corte + Barba', 18000, 30);

INSERT INTO configuracion (
    hora_apertura,
    hora_cierre,
    lunes,
    martes,
    miercoles,
    jueves,
    viernes,
    sabado,
    domingo
)
VALUES (
    '09:00',
    '20:00',
    TRUE,
    TRUE,
    TRUE,
    TRUE,
    TRUE,
    TRUE,
    FALSE
);