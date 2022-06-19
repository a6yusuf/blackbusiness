import React from 'react'
import '../frontend.scss'

export default function Skeleton() {
    return (
        <div className="gb-rounded-md gb-p-2 gb-max-w-xs gb-w-full gb-mx-auto">
            <div className="gb-animate-pulse gb-flex gb-space-x-4">
                <div className="gb-flex-1 gb-space-y-4 gb-py-1">
                    <div className="gb-h-36 gb-bg-gray-400 gb-rounded gb-w-full"></div>
                </div>
            </div>
        </div>
    )
}
