import {SongWrapper} from './song-wrapper';

export interface ResultResponse {
  resultCount: number;
  results: Array<SongWrapper>;
}
