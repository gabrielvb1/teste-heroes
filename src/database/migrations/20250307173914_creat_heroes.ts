import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('heroes', (table) => {
    table.increments('id');
    table.string('nome', 255).notNullable();
    table.string('descricao').notNullable();
    table.string('imagem').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
    
}
