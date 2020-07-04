import ContentLoader, { Facebook } from 'react-content-loader'

import { useSumary } from '../../hooks/signupStateForm'

export default function Summary() {
    const { summary } = useSumary()

    if (!summary.length) {
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
        )
    }

    return (
        <>
         <div className="border-0 shadow card summary">
             <div className="p-4 card-body">
                 <div className="text-block pb-3">
                     <div className="align-items-center media">
                         <div className="media-body">
                             <h6>
                                 <a className="text-reset" href="detail-rooms">
                                     Modern Apt - Vibrant Neighborhood
                                 </a>
                            </h6>
                            <p className="text-muted text-sm mb-0">Entire home in New York<span className="mt-n1 d-block"><i className="fa fa-sm fa-star text-primary"></i><i className="fa fa-sm fa-star text-primary"></i><i className="fa fa-sm fa-star text-primary"></i><i className="fa fa-sm fa-star text-primary"></i><i className="fa fa-star fa-sm text-gray-300"></i></span></p>
                        </div>
                            <a href="detail-rooms"><img src="/content/img/photo/photo-1512917774080-9991f1c4c750.jpg" alt="" width="100" className="ml-3 rounded" /></a>
                        </div>
                    </div>
                <div className="text-block py-3">
                    <ul className="list-unstyled mb-0">
                        <li className="mb-3"><i className="fas fa-users fa-fw text-muted mr-2"></i>3 guests</li>
                        <li className="mb-0"><i className="far fa-calendar fa-fw text-muted mr-2"></i>Apr 17, 2019 <i className="fas fa-arrow-right fa-fw text-muted mx-3"></i>Apr 18, 2019</li>
                    </ul>
                </div>
                <div className="text-block pt-3 pb-0">
                    <table className="w-100"><tbody><tr><th className="font-weight-normal py-2">$432.02 x 1 night</th><td className="text-right py-2">$432.02</td></tr><tr><th className="font-weight-normal pt-2 pb-3">Service fee</th><td className="text-right pt-2 pb-3">$67.48</td></tr></tbody><tfoot><tr className="border-top"><th className="pt-3">Total</th><td className="font-weight-bold text-right pt-3">$499.50</td></tr></tfoot></table>
                </div>
            </div>
            <div className="bg-primary-light py-4 border-0 card-footer">
                <div className="align-items-center media">
                    <div className="media-body">
                        <h6 className="text-primary">Flexible – free cancellation</h6>
                        <p className="text-sm text-primary opacity-8 mb-0">Cancel within 48 hours of booking to get a full refund. <a href="#" className="text-reset ml-3">More details</a></p>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    )
}