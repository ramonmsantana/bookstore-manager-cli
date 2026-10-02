create table autores( 
id serial primary key,
nome_autor varchar(150) not null
)

create table generos(
id serial primary key,
genero varchar(50) unique not null
)

create table editoras(
id serial primary key,
editora varchar(150) unique not null
)

create table regioes(
id serial primary key,
regiao varchar (50) unique not null
)

create table estados(
id serial primary key,
estado varchar(50) not null,
sigla varchar(2) unique not null,
id_regiao integer not null,

foreign key (id_regiao)
	references regioes(id)
)

create table livros(
id serial primary key,
titulo varchar (150) not null,
quantidade_cadastrada integer not null check (quantidade_cadastrada >= 0),
quantidade_disponivel integer not null check (quantidade_disponivel >= 0 and quantidade_disponivel <= quantidade_cadastrada),
id_autor  integer not null,
id_genero integer not null,
id_editora integer not null,
ano_de_lancamento integer not null,

foreign key (id_autor)
	references autores(id),

foreign key (id_genero)
	references generos(id),

foreign key (id_editora)
	references editoras(id)
)

create table cidades(
id serial primary key,
municipio varchar (150) not null,
id_estado integer not null,

unique (municipio, id_estado),

foreign key (id_estado)
	references estados(id)
)

create table clientes( 
id serial primary key,
nome varchar(150) not null,
cpf varchar(11) unique not null,
data_nascimento date not null,
id_cidade integer not null,
telefone varchar(30),
email varchar(100) unique,
data_cadastro date default current_date, 

foreign key (id_cidade)
	references cidades(id)
)

create table emprestimos( 
id serial primary key,
id_cliente integer not null,
data_retirada date default current_date,
data_prevista_devolucao date not null,

foreign key (id_cliente)
	references clientes(id)
)

create table itens_emprestimos( 
id serial primary key,
id_emprestimo integer not null,
id_livro integer not null,
data_devolucao date,

foreign key (id_emprestimo)
	references emprestimos(id),

foreign key (id_livro)
	references livros(id)
)