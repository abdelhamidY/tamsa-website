import { Dispatch, SetStateAction } from "react";

export type MediaCenterItemProps = {
  image: string;
  title: string;
  setClickedCard:Dispatch<SetStateAction<{
    isClicked: boolean;
    data: {};
}>>

};
