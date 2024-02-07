export default function JsonTable({ data }: { data: Array<any> }) {
  return (
    data.length > 0 && (
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              {Object.keys(data[0]).map((key, index) => {
                return <th key={index}>{key}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => {
              return (
                <tr key={index}>
                  {Object.values(row).map((value, index) => {
                    return (
                      <td key={index}>
                        <p>{value as string}</p>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    )
  );
}
