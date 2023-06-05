import { Album } from "./AlbumVoting";
import React from "react";

type Props = {
	album: Album,
	onChange: (updated: Album) => void
}

export const AlbumItem = React.memo(({ album, onChange }: Props) => {
	function handleChange(change: Partial<Album>) {
		onChange({
			...album,
			...change
		});
	}

	return <p className={"my-3"}>
		Title:
		<input value={album.title} className={"border-gray-400 border-2 mx-2 p-2 rounded"}
			   onChange={(e) => handleChange({ title: e.target.value })}
		/>

		Rating
		<input type='number'
			   value={album.rating} className={"border-gray-400 border-2 ml-2 p-2 rounded"}
			   onChange={(e) => handleChange({ rating: Number(e.target.value) })}
		/>
	</p>
})