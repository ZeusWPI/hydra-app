import { useAxios } from "@vueuse/integrations";
import { defineStore } from "pinia";
import { NewsWrapper } from "./models/news.model";

export const useNewsAPI = defineStore("news.api", () => {
    const newsListNL = useAxios<NewsWrapper>("https://hydra.ugent.be/api/2.0/news/nl.json");
    const newsListEN = useAxios<NewsWrapper>("https://hydra.ugent.be/api/2.0/news/en.json");

    return {
        newsListNL,
        newsListEN,
    };
});