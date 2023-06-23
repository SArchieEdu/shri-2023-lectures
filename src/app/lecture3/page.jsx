"use client";

import { cartActions } from "@/redux/features/cart";
import { selectProductAmount } from "@/redux/features/cart/selector";
import { useGetMovieQuery, useGetMoviesQuery } from "@/redux/services/movieApi";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const PRODUCT_ID = "123";

const Product = () => {
  const amount = useSelector((state) => selectProductAmount(state, PRODUCT_ID));
  return <div>{amount}</div>;
};

const Film = ({ filmId }) => {
  const { data, isLoading, error } = useGetMovieQuery(filmId);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!data || error) {
    return <span>NotFound</span>;
  }

  return <div>Active: {data.title}</div>;
};

const Films = () => {
  const { data, isLoading, error } = useGetMoviesQuery();

  const [currentFilmId, setCurrentFilmId] = useState();
  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!data || error) {
    return <span>NotFound</span>;
  }
  return (
    <div>
      {data.map(({ id, title }) => (
        <button key={id} onClick={() => setCurrentFilmId(id)}>
          {title}
        </button>
      ))}
      {currentFilmId && <Film filmId={currentFilmId} />}
    </div>
  );
};

export default function Redux() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(cartActions.decrement(PRODUCT_ID))}>
        -
      </button>
      <button onClick={() => dispatch(cartActions.increment(PRODUCT_ID))}>
        +
      </button>
      <Product />
      <Films />
    </div>
  );
}
