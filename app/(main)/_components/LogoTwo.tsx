import React, { useEffect, useRef } from 'react';

function Logo() {
    const svgRef = useRef<SVGSVGElement | null>(null);

    useEffect(() => {
        const paths = svgRef.current?.querySelectorAll('path');

        if (paths) {
            paths.forEach((path) => {
                const length = path.getTotalLength(); // Get the total length of the path
                path.style.strokeDasharray = `${length}`; // Set the stroke-dasharray to the path length
                path.style.strokeDashoffset = `${length}`; // Initially hide the path
                path.style.transition = 'stroke-dashoffset 2s ease-in-out'; // Add animation
                path.style.stroke = '#2563lb'; // Set stroke color (blue)
                path.style.fill = 'none'; // Optional: Set fill to none if you only want the stroke

                // Trigger animation after a short delay
                setTimeout(() => {
                    path.style.strokeDashoffset = '0';
                }, 300);
            });
        }
    }, []);

    return (
        <svg
            ref={svgRef}
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 3406.5972 5000"
            version="1.1"
            viewBox="0 0 3406.6 5000"
            className="w-48 h-48"
        >
            <path d="m741.22 2286.7c-173.95-6.0105-335.21-110.64-491.66-252.57 72.856-78.382 86.549-185.19 67.435-307.75l555.42-315.11c48.252-208.09 197.78-278.01 404.61-269.74 42.652-106.4 106.56-205.81 188.82-299.17-465.49 108.3-727.32 292.51-731.98 572.58l-666.97 332.96c-63.479 31.69-86.15 111.03-48.935 171.44 29.209 47.41 57.867 91.543 85.69 130.71-4.0791 130.73 37.605 218.09 131.19 256.25 53.27 117.99 144.58 184.51 294.01 172.37 14.584-1.1846 28.969-4.0315 43.138-7.6855 55.655-14.353 130.64-4.96 209.69 9.4216 74.432-107.55 157.81-210.95 250.12-310.2-96.534 72.524-193.31 119.84-290.58 116.48zm-505.15-161.23c181.46 126.29 355.03 228.26 511.28 276.79-197.36 22.51-363.94-86.158-511.28-276.79z" />
            <path d="m1571.3 89.504c-308.06 108.51-27.587 542.55-199.85 678.03 471.13-95.022 27.893-326.75 199.85-678.03z" />
            <path d="m1507.5 996.81c224.67-82.268 342.9-268.33 279.55-631.44 194.03 345.83 208.39 640.76-80.922 849.68 111.09 29.599 202.73-16.377 270.97-153.26l40.461 203.53c297.94-692.74-326.14-833.74-163.07-1265.3-388.67 307.75-13.487 376.41-346.98 996.81z" />
            <path d="m1009.7 2527c161.84-231.73 239.1-159.51 358.02-204.76 389.9-148.36 437.97-561.75 107.9-762.63 305.3 684.16-495.34 532.12-465.91 967.39z" />
            <path d="m1266 3517.7c483.69-785.31 393.58-958.19 343.92-1112.7-16.298 243.95-83.49 426.87-201.39 548.98 57.166-177 41.86-325.37-41.381-446.91 47.818 506.68-299.78 696.11-393.12 1222.2-62.826 354.12-57.465 768.62 341.63 1204.5-155.45-264.93-346.08-934.87-49.657-1416.1z" />
        </svg>
    );
}

export default Logo;
