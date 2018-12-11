import {Typ} from './typ';

export class Artist {
  constructor(
    public artistId ?: string,
    public artistName?: string,
    public artistSkills ?: Typ[],
    public artistCreateDatum ?: Date,
    public artistUpdateDatum ?: Date
  ) { }
}
