import ContentLoader from 'react-content-loader';
import React from 'react';
import { parsePrice } from '../../helpers/price';
import { useSumary } from '../../hooks/useSummary';
import SummaryCategory from './summary-category';

export default function Summary() {
  const { empty, loading, summary } = useSumary();

  if (empty || loading) {
    return (
      <>
        <div className="border-0 shadow card summary summary-empty">
          <div className="p-4 card-body">
            <ContentLoader viewBox="0 0 380 270">
              <rect x="20" y="30" rx="3" ry="3" width="200" height="10" />
              <rect x="260" y="30" rx="3" ry="3" width="95" height="10" />
              <rect x="20" y="60" rx="3" ry="3" width="180" height="10" />
              <rect x="260" y="60" rx="3" ry="3" width="95" height="10" />
              <rect x="20" y="90" rx="3" ry="3" width="180" height="10" />
              <rect x="260" y="90" rx="3" ry="3" width="95" height="10" />
              <rect x="20" y="120" rx="3" ry="3" width="160" height="10" />
              <rect x="260" y="120" rx="3" ry="3" width="95" height="10" />
              <rect x="20" y="150" rx="3" ry="3" width="160" height="10" />
              <rect x="260" y="150" rx="3" ry="3" width="95" height="10" />
              <rect x="20" y="190" rx="3" ry="3" width="335" height="10" />
              <rect x="260" y="230" rx="3" ry="3" width="95" height="10" />
            </ContentLoader>

          </div>

        </div>
      </>
    );
  }

  return (
    <>
      <div className="border-0 shadow card summary">
        <div className="p-4 card-body">
          <div className="text-block pb-3">
            <div className="align-items-center media">
              <div className="media-body">
                <h6>Tu pack</h6>
              </div>
            </div>
          </div>
          <div className="text-block pt-3 pb-0">
            <table className="w-100">
              {Object.keys(summary).map((category) => <SummaryCategory name={category} items={summary[category]} />)}
              <tfoot>
                <tr className="border-top">
                  <th className="pt-2">Total</th>
                  <td className="font-weight-bold text-right pt-4">{parsePrice(summary.Total)}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <div className="bg-primary-light py-4 border-0 card-footer">
          <div className="align-items-center media">
            <div className="media-body">
              <h6 className="text-primary">Duración</h6>
              <p className="text-sm text-primary opacity-8 mb-0">
                Según nuestros cálculos este pack te durará un mes
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
