import Knex from "knex";

export async function up(knex: Knex) {
  // Criar a tabela
  return knex.schema.createTable("items", (table) => {
    table.increments("id").notNullable();
    table.string("image").notNullable();
    table.string("title").notNullable();
  });
}

export async function down(knex: Knex) {
  // Voltar atrás (deletar a tabela)
  return knex.schema.dropTable("items");
}
