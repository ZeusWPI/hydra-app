<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-title>Tab 1</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content :fullscreen="true">
			<ion-header collapse="condense">
				<ion-toolbar>
					<ion-title size="large">Tab 3</ion-title>
				</ion-toolbar>

				<template v-if="testItems.isFinished">
					<ul>
						<li v-for="test in testItems.data" :key="test.id">{{ test.title }}</li>
					</ul>
				</template>
			</ion-header>

			<ion-item>
				<ion-label>Popover</ion-label>
				<ion-select @ionChange="setResto" interface="popover" :value="restos[0].choice[0]" placeholder="Select One">
					<ion-select-option
						v-for="item in restos"
						:key="item.choice[0]"
						:value="item.choice[0]"
					>{{ item.choice[0] }}</ion-select-option>
				</ion-select>
			</ion-item>
			<ion-list>
				<ion-item>
					<ion-header>Main meals</ion-header>
					<ion-list>
						<ion-item v-for="(item, idx) in getMainCourses" :key="idx">{{ item.name }}</ion-item>
					</ion-list>
				</ion-item>
				<ion-item>
					<ion-header>Cold dishes</ion-header>
					<ion-list>
						<ion-item v-for="(item, idx) in getColdDishes" :key="idx">{{ item.name }}</ion-item>
					</ion-list>
				</ion-item>
				<ion-item>
					<ion-header>Soups</ion-header>
					<ion-list>
						<ion-item v-for="(item, idx) in getSoups" :key="idx">{{ item.name }}</ion-item>
					</ion-list>
				</ion-item>
			</ion-list>
		</ion-content>
	</ion-page>
</template>

<script lang="ts" setup>
import { useTestAPI, useRestoAPI } from "@/api/test.api";
import {
	IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem,
	IonLabel,
	IonList,
	IonListHeader,
	IonSelect,
	IonSelectOption
} from "@ionic/vue";
import type { SelectChangeEventDetail } from "@ionic/core";
import { computed, ref } from "vue";
import type { RestoMeal } from "@/api/models/resto.model";

const { restos } = useRestoAPI();
const { testItems } = useTestAPI();

const currentResto = ref(
	restos[0]
);


const getMainCourses = computed(() => {
	const isMainDish = (x: RestoMeal) => x.kind != "soup" && x.type == "main";
	return currentResto.value.menu.meals.filter(isMainDish);
});

const getSoups = computed(() => {
	const isSoup = (x: RestoMeal) => x.kind == "soup";
	return currentResto.value.menu.meals.filter(isSoup);
});

const getColdDishes = computed(() => {
	const isColdDish = (x: RestoMeal) => x.kind != "soup" && x.type == "cold";
	return currentResto.value.menu.meals.filter(isColdDish);
});



const setResto = (i: CustomEvent<SelectChangeEventDetail<any>>) => {
	currentResto.value = restos.filter(x => x.choice[0] == i.detail.value)[0];
};

</script>
