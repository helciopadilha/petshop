USE petshop;

INSERT INTO clientes (nome,email,telefone) VALUES
('Ana Silva','ana@teste.com','11999990001'),
('Bruno Souza','bruno@teste.com','11999990002');

INSERT INTO animais (nome,especie,raca,idade,cliente_id) VALUES
('Rex','Cachorro','SRD',4,1),
('Mimi','Gato','Siamês',2,1),
('Bidu','Cachorro','Beagle',3,2);

INSERT INTO agendamentos (animal_id,servico,data,horario,status) VALUES
(1,'BANHO','2025-11-05','10:00:00','ABERTO'),
(2,'CONSULTA','2025-11-06','14:30:00','CONFIRMADO');
