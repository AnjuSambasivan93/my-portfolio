import { create } from "zustand";

type ProjectStore = {
    selectedProject: number;
    setSelectedProject: (index: number) => void;
};

export const useProjectStore = create<ProjectStore>((set) =>({
    
    selectedProject: 0,

    setSelectedProject: (index) => {
        set({ selectedProject: index });
    },
}))