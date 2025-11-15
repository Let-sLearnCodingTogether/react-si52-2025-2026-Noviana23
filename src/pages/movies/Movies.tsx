import { useCallback, useEffect, useState } from "react"
import { NavLink } from "react-router"
import ApiClient from "../../utils/ApiClient"

interface Movie {
    _id : string,
    judul :string,
    tahunRilis : string,
    sutradara : string,
    createdAt : string,
    updatedAt :string
}
function Movies() {
    const [Movie, setMovies]= useState<Movie[]>([])

    const fetchMovie = useCallback(async () => {
        const response = await ApiClient.get("/movie")

        if (response.status == 200){
            setMovies(response.data.data)
        }

    },[])

    useEffect(() => {
        fetchMovie()
    }, [fetchMovie])

    return <div className="container mx-auto">
        <div className="d-flex justify-contet-between mb-3">
        <h2>Movie Page</h2>
        <NavLink to ="/add-movie" className= "btn btn-primary">Add Movie</NavLink>
        </div>
    </div>
}

export default Movies