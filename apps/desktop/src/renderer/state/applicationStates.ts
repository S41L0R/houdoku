import { atom } from 'recoil';

export const platformState = atom<string | undefined>({
    key: 'platformState',
    default: undefined
});
