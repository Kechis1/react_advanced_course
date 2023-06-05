import React, {useCallback, useState} from "react";
import { AlbumItem } from "./AlbumItem";

export type Album = {
	id: number;
	title: string;
	rating: number;
}

export const AlbumVoting = function() {
	const [albums, setAlbums] = useState(new Array(15).fill({
		id: 0,
		title: '',
		rating: 0
	}).map((album, index) => ({ ...album, id: index })));

	function handleChange (updatedAlbum: Album) {
		setAlbums(albums => albums.map(album => album.id === updatedAlbum.id ? updatedAlbum : album));
	};

	const memoizedHandleChange = useCallback(handleChange, []);

	return <div className={"mt-5"}>
		<h1 className={"text-6xl font-bold text-red-500 my-5"}>Albums</h1>
		{albums.map(album => <AlbumItem key={album.id} album={album} onChange={memoizedHandleChange} />)}
	</div>
}