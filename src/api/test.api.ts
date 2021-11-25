import { useAxios } from "@vueuse/integrations";
import { defineStore } from "pinia";
import { Resto, RestoMeal, RestoMenu } from "./models/resto.model";
import { Test } from "./models/test.model";

export const useTestAPI = defineStore("test.api", () => {
	const testItems = useAxios<Test[]>("https://jsonplaceholder.typicode.com/todos");

	return {
		testItems,
	};
});

const createVegies = (): string[] => {
	const vegies = ["pompelmoes", "bananenschillen", "brocoli", "appelen"];

	return [...new Array(5)].map(_i => {
		const index = Math.floor(Math.random() * vegies.length);
		return vegies[index];
	});
}

const createMeal = (): RestoMeal => {
	const kindIndex = Math.floor(Math.random() * 2);
	const typeIndex = Math.floor(Math.random() * 3);

	const kinds = ["soup", "not soup"];
	const types = ["main", "side", "cold"];

	return {
		name: kinds[kindIndex] + " " + types[typeIndex],
		price: "-3.14",
		kind: kinds[kindIndex],
		type: types[typeIndex]
	};
}

const createResto = (foo: any, index: number): Resto => {
	return {
		menu: {
			open: true,
			date: new Date(),
			meals: [...new Array(10)].map(createMeal),
			vegetables: createVegies(),
			message: "Some message"
		},
		choice: ["Sterre " + index, "some point"],
		kind: "resto"
	};
}

export const useRestoAPI = defineStore("resto.api", () => {
	const restos: Resto[] = [... new Array(10)].map(createResto);

	return { restos };
});
