import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	const todos = new Array(10).fill(0).map(() => randomTodo());
	await prisma.todo.deleteMany();
	for (const todo of todos) {
		await prisma.todo.create({ data: todo });
	}
}

function randomTodo() {
	return {
		description: 'This is a random todo',
		done: Math.random() > 0.76,
		due: new Date(),
		end: new Date(),
		start: new Date(),
		title: 'Random Todo'
	};
}

main();
