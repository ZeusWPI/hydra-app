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
						<li v-for="test in testItems.data" :key="test.id">
							{{ test.title }}
						</li>
					</ul>
				</template>
			</ion-header>
		</ion-content>
	</ion-page>
</template>

<script lang="ts" setup>
import { useTestAPI } from "@/api/test.api";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/vue";

const { testItems } = useTestAPI();
</script>
