export interface ProjectData {
  paramA: number;
  paramB: number;
  paramC: number;
  paramD: number;
}

export interface ResultData {
  effort: number;
  duration: number;
  personnel: number;
  p: number;
}

export const COCOMODict: { [key: string ]: ProjectData } =  {
  'organic' : { paramA: 2.4, paramB: 1.05, paramC:2.5, paramD: 0.38 },
  'semi detached': { paramA: 3, paramB: 1.12, paramC:2.5, paramD: 0.35 },
  'embedded': { paramA: 3.6, paramB: 1.2, paramC:2.5, paramD: 0.32 },
}
  