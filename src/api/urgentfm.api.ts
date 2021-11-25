import { useAxios } from "@vueuse/integrations";
import { defineStore } from "pinia";
import { UrgentfmWrapper } from "./models/urgentfm.model";

export const useUrgentfmAPI = defineStore("news.api", () => {
    const urgentfm = useAxios<UrgentfmWrapper>("https://hydra.ugent.be/api/2.0/urgentfm/status.json");

    return {
        urgentfm,
    };
});