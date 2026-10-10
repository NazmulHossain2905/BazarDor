export default function ProductDetailsLoadingSkeleton() {
  return (
    <section className="mx-auto mb-12 flex max-w-6xl animate-pulse flex-col gap-6 px-4 py-6">
      {/* Breadcrumb */}{" "}
      <div className="flex items-center gap-2.5">
        {" "}
        <div className="h-4 w-10 rounded bg-base-300" />{" "}
        <div className="size-2.5 rounded-sm bg-base-300" />{" "}
        <div className="h-4 w-20 rounded bg-base-300" />{" "}
        <div className="size-2.5 rounded-sm bg-base-300" />{" "}
        <div className="h-4 w-28 rounded bg-base-300" />{" "}
      </div>
      {/* Product Details */}
      <div className="flex flex-col justify-between gap-5 rounded-2xl border border-base-300 bg-base-100 p-5 sm:flex-row sm:items-center">
        <div className="flex min-w-0 flex-1 items-center gap-4">
          {/* Product Image */}
          <div className="size-20 shrink-0 rounded-2xl bg-base-300" />

          {/* Product Information */}
          <div className="min-w-0 flex-1 space-y-3">
            <div className="h-8 w-2/3 max-w-56 rounded-lg bg-base-300" />
            <div className="h-4 w-40 max-w-full rounded bg-base-300" />
            <div className="mt-2 h-4 w-full max-w-72 rounded bg-base-300" />
          </div>
        </div>

        {/* Today's Price */}
        <div className="flex shrink-0 flex-col items-center gap-3 rounded-2xl bg-base-200 px-8 py-4 sm:min-w-40">
          <div className="h-4 w-20 rounded bg-base-300" />
          <div className="h-9 w-24 rounded-lg bg-base-300" />
          <div className="h-4 w-28 rounded bg-base-300" />
          <div className="h-6 w-16 rounded-lg bg-base-300" />
        </div>
      </div>
      {/* Price Summary */}
      <div className="flex flex-col rounded-2xl border border-base-300 bg-base-100 p-5">
        <div className="h-6 w-36 rounded bg-base-300" />

        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 rounded-2xl border border-base-300 bg-base-100 px-6 py-4"
            >
              <div className="h-4 w-20 rounded bg-base-300" />
              <div className="h-8 w-28 rounded bg-base-300" />
              <div className="h-3 w-36 max-w-full rounded bg-base-300" />
            </div>
          ))}
        </div>
      </div>
      {/* Market Prices Table */}
      <div className="flex flex-col rounded-2xl border border-base-300 bg-base-100 p-5">
        <div className="h-6 w-48 max-w-full rounded bg-base-300" />

        <div className="mt-3 w-full overflow-x-auto rounded-2xl border border-base-300">
          <table className="w-full min-w-162 table-fixed border-collapse bg-base-100">
            <colgroup>
              <col className="w-2/5" />
              <col className="w-1/5" />
              <col className="w-1/5" />
              <col className="w-1/5" />
              <col className="w-1/5" />
            </colgroup>

            <thead>
              <tr className="border-b border-base-300 bg-base-200">
                {["w-12", "w-12", "w-14", "w-14", "w-10"].map(
                  (width, index) => (
                    <th
                      key={index}
                      className={`px-4 py-3 ${
                        index < 2 ? "text-left" : "text-right"
                      }`}
                    >
                      <div
                        className={`h-4 ${width} rounded bg-base-300 ${
                          index >= 2 ? "ml-auto" : ""
                        }`}
                      />
                    </th>
                  ),
                )}
              </tr>
            </thead>

            <tbody>
              {Array.from({ length: 5 }).map((_, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={`border-b border-base-300 last:border-b-0 ${
                    rowIndex % 2 === 1 ? "bg-base-200" : ""
                  }`}
                >
                  {["w-24", "w-16", "w-14", "w-14", "w-14"].map(
                    (width, colIndex) => (
                      <td key={colIndex} className="px-4 py-3">
                        <div
                          className={`h-4 max-w-full rounded bg-base-300 ${width} ${
                            colIndex >= 2 ? "ml-auto" : ""
                          }`}
                        />
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Back to Category */}
      <div className="h-10 w-36 rounded-lg border border-base-300 bg-base-200" />
    </section>
  );
}
