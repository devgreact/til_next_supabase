import { create } from 'zustand';
import { combine } from 'zustand/middleware';

create(combine(객채, 함수));
