export const useSidebar = () => {
    return useState('sidebar-open', () => ref(false));
}