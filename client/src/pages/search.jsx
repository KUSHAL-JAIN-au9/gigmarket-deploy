import SearchGridItem from "../components/Search/SearchGridItem";
import { SEARCH_GIGS_ROUTE } from "../utils/constants";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
function Search() {
  const router = useRouter();
  const { category, q } = router.query;
  const [gigs, setGigs] = useState(undefined);
  const [render, setRender] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        const {
          data: { gigs },
        } = await axios.get(
          `${SEARCH_GIGS_ROUTE}?searchTerm=${q}&category=${category}`
        );
        setGigs(gigs);
      } catch (err) {
        console.error(err);
      }
    };
    if (category || q) getData();
  }, [category, q]);

  useEffect(() => {}, [render]);

  console.log("gigs", gigs);
  return (
    <>
      {gigs && (
        <div className="mx-24 mb-24">
          {q && (
            <h3 className="text-4xl mb-10">
              Results for <strong>{q}</strong>
            </h3>
          )}
          <div className="flex gap-4">
            <button
              className="py-3 px-5 border border-gray-400 rounded-lg font-medium"
              onClick={() => {
                const sortedGigs = gigs.sort((a, b) =>
                  a.category > b.category ? 1 : -1
                );

                // console.log("soreted category", sortedGigs);
                setGigs(sortedGigs);
                setRender(!render);
              }}
            >
              Category
            </button>
            <button
              className="py-3 px-5 border border-gray-400 rounded-lg font-medium"
              onClick={() => {
                const sortedGigs = gigs.sort((a, b) =>
                  a?.price > b?.price ? 1 : -1
                );

                console.table("soreted category", sortedGigs);
                setGigs(sortedGigs);
                setRender(!render);
              }}
            >
              Budget
            </button>
            <button
              className="py-3 px-5 border border-gray-400 rounded-lg font-medium"
              onClick={() => {
                const sortedGigs = gigs.sort((a, b) =>
                  a?.deliveryTime > b?.deliveryTime ? 1 : -1
                );

                console.table("soreted category", sortedGigs);
                setGigs(sortedGigs);
                setRender(!render);
              }}
            >
              Delivery Time
            </button>
          </div>
          <div>
            <div className="my-4">
              <span className="text-[#74767e] font-medium ">
                {gigs.length} services available
              </span>
            </div>
            <div className="grid grid-cols-4">
              {gigs.map((gig) => (
                <SearchGridItem gig={gig} key={gig.id} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Search;
