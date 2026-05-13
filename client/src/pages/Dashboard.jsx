import React from 'react';

const Dashboard = () => {

    return (

        <div className='w-full min-h-screen pb-6'>

            {/* MAIN GRID */}
            <div className='grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-6'>

                {/* LEFT SECTION */}
                <div className='space-y-6'>

                    {/* WELCOME CARD */}
                    <div className='bg-white rounded-3xl border border-gray-200 p-6 shadow-sm'>

                        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5'>

                            <div>

                                <p className='text-sm text-gray-400 mb-2'>
                                    Welcome back
                                </p>

                                <h1 className='text-4xl font-bold text-gray-800'>
                                    Good morning, Himanshu
                                </h1>

                                <p className='text-gray-500 mt-2'>
                                    Quick overview of broadcasting activity and content awaiting your review.
                                </p>

                            </div>

                            <button className='bg-indigo-600 hover:bg-indigo-700 transition-all text-white px-6 py-3 rounded-2xl font-medium w-fit'>
                                Create Broadcast
                            </button>

                        </div>

                        {/* STATS */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8'>

                            {/* CARD */}
                            <div className='bg-gray-50 rounded-2xl p-5 border border-gray-100'>

                                <p className='text-sm text-gray-400'>
                                    Uploaded Content
                                </p>

                                <h2 className='text-3xl font-bold text-gray-800 mt-4'>
                                    1,248
                                </h2>

                                <p className='text-sm text-green-500 mt-2'>
                                    +12% from last month
                                </p>

                            </div>

                            {/* CARD */}
                            <div className='bg-gray-50 rounded-2xl p-5 border border-gray-100'>

                                <p className='text-sm text-gray-400'>
                                    Pending Approvals
                                </p>

                                <h2 className='text-3xl font-bold text-gray-800 mt-4'>
                                    4
                                </h2>

                                <p className='text-sm text-red-400 mt-2'>
                                    4 awaiting review
                                </p>

                            </div>

                            {/* CARD */}
                            <div className='bg-gray-50 rounded-2xl p-5 border border-gray-100'>

                                <p className='text-sm text-gray-400'>
                                    Approved Broadcasts
                                </p>

                                <h2 className='text-3xl font-bold text-gray-800 mt-4'>
                                    312
                                </h2>

                                <p className='text-sm text-gray-500 mt-2'>
                                    Preparing schedule
                                </p>

                            </div>

                            {/* CARD */}
                            <div className='bg-gray-50 rounded-2xl p-5 border border-gray-100'>

                                <p className='text-sm text-gray-400'>
                                    Rejected Items
                                </p>

                                <h2 className='text-3xl font-bold text-gray-800 mt-4'>
                                    9
                                </h2>

                                <p className='text-sm text-gray-500 mt-2'>
                                    Recent rejections
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* RECENT UPLOADS */}
                    <div className='bg-white rounded-3xl border border-gray-200 p-6 shadow-sm'>

                        {/* HEADER */}
                        <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6'>

                            <div>

                                <h2 className='text-2xl font-bold text-gray-800'>
                                    Recent Uploads
                                </h2>

                                <p className='text-sm text-gray-400 mt-1'>
                                    Latest content uploaded by teachers
                                </p>

                            </div>

                            <div className='flex items-center gap-3'>

                                <input
                                    type='text'
                                    placeholder='Search uploads'
                                    className='bg-gray-50 border border-gray-200 px-4 py-3 rounded-full outline-none text-sm w-[220px]'
                                />

                                <button className='border border-gray-300 px-5 py-3 rounded-2xl text-sm hover:bg-gray-100 transition-all'>
                                    Export
                                </button>

                            </div>

                        </div>

                        {/* TABLE */}
                        <div className='overflow-x-auto'>

                            <table className='w-full min-w-[750px]'>

                                <thead>

                                    <tr className='border-b border-gray-200 text-left text-sm text-gray-400'>

                                        <th className='pb-4 font-medium'>
                                            Title
                                        </th>

                                        <th className='pb-4 font-medium'>
                                            Subject
                                        </th>

                                        <th className='pb-4 font-medium'>
                                            Teacher
                                        </th>

                                        <th className='pb-4 font-medium'>
                                            Upload
                                        </th>

                                        <th className='pb-4 font-medium'>
                                            Schedule
                                        </th>

                                        <th className='pb-4 font-medium'>
                                            Status
                                        </th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {/* ROW */}
                                    <tr className='border-b border-gray-100'>

                                        <td className='py-5 font-medium text-gray-800'>
                                            Calculus Midterm Paper
                                        </td>

                                        <td className='py-5 text-gray-500'>
                                            Mathematics
                                        </td>

                                        <td className='py-5 text-gray-500'>
                                            Priya Shah
                                        </td>

                                        <td className='py-5 text-gray-500'>
                                            Apr 28
                                        </td>

                                        <td className='py-5 text-gray-500'>
                                            May 2 - May 10
                                        </td>

                                        <td className='py-5'>
                                            <span className='bg-orange-100 text-orange-500 px-3 py-1 rounded-full text-sm'>
                                                Pending
                                            </span>
                                        </td>

                                    </tr>

                                    {/* ROW */}
                                    <tr className='border-b border-gray-100'>

                                        <td className='py-5 font-medium text-gray-800'>
                                            Biology Lab Notes
                                        </td>

                                        <td className='py-5 text-gray-500'>
                                            Biology
                                        </td>

                                        <td className='py-5 text-gray-500'>
                                            Marcus Lee
                                        </td>

                                        <td className='py-5 text-gray-500'>
                                            Apr 27
                                        </td>

                                        <td className='py-5 text-gray-500'>
                                            May 1 - May 3
                                        </td>

                                        <td className='py-5'>
                                            <span className='bg-green-100 text-green-500 px-3 py-1 rounded-full text-sm'>
                                                Approved
                                            </span>
                                        </td>

                                    </tr>

                                    {/* ROW */}
                                    <tr className='border-b border-gray-100'>

                                        <td className='py-5 font-medium text-gray-800'>
                                            World History Slides
                                        </td>

                                        <td className='py-5 text-gray-500'>
                                            History
                                        </td>

                                        <td className='py-5 text-gray-500'>
                                            Aisha Khan
                                        </td>

                                        <td className='py-5 text-gray-500'>
                                            Apr 25
                                        </td>

                                        <td className='py-5 text-gray-500'>
                                            May 5 - May 12
                                        </td>

                                        <td className='py-5'>
                                            <span className='bg-red-100 text-red-500 px-3 py-1 rounded-full text-sm'>
                                                Rejected
                                            </span>
                                        </td>

                                    </tr>

                                    

                                </tbody>

                            </table>

                        </div>

                    </div>

                    {/* PENDING APPROVALS */}
                    <div className='bg-white rounded-3xl border border-gray-200 p-6 shadow-sm'>

                        {/* HEADER */}
                        <div className='flex items-center justify-between mb-6'>

                            <div>

                                <h2 className='text-2xl font-bold text-gray-800'>
                                    Pending Approvals
                                </h2>

                                <p className='text-sm text-gray-400 mt-1'>
                                    Items waiting for principal review
                                </p>

                            </div>

                            <p className='text-sm text-gray-400'>
                                Showing 1-4 of 4
                            </p>

                        </div>

                        {/* CARD */}
                        <div className='space-y-5'>

                            <div className='border border-gray-200 rounded-2xl p-5'>

                                <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5'>

                                    <div>

                                        <h3 className='text-xl font-semibold text-gray-800'>
                                            Calculus Midterm Paper 2026
                                        </h3>

                                        <p className='text-sm text-gray-400 mt-2'>
                                            Subject: Mathematics · Uploaded by Priya Shah · Apr 28
                                        </p>

                                        <p className='text-sm text-gray-500 mt-3 leading-7'>
                                            Notes preview: Contains diagrams for integrals, formatted for print.
                                        </p>

                                    </div>

                                    <div className='flex items-center gap-3'>

                                        <button className='bg-green-100 text-green-600 px-5 py-2 rounded-full text-sm font-medium hover:bg-green-200 transition-all'>
                                            Approve
                                        </button>

                                        <button className='bg-red-100 text-red-500 px-5 py-2 rounded-full text-sm font-medium hover:bg-red-200 transition-all'>
                                            Reject
                                        </button>

                                    </div>

                                </div>

                            </div>

                            {/* CARD */}
                            <div className='border border-gray-200 rounded-2xl p-5'>

                                <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5'>

                                    <div>

                                        <h3 className='text-xl font-semibold text-gray-800'>
                                            Biology Lab Notes
                                        </h3>

                                        <p className='text-sm text-gray-400 mt-2'>
                                            Subject: Biology · Uploaded by Marcus Lee · Apr 27
                                        </p>

                                        <p className='text-sm text-gray-500 mt-3 leading-7'>
                                            Includes high-resolution microscopy images and structure slides.
                                        </p>

                                    </div>

                                    <div className='flex items-center gap-3'>

                                        <button className='bg-green-100 text-green-600 px-5 py-2 rounded-full text-sm font-medium hover:bg-green-200 transition-all'>
                                            Approve
                                        </button>

                                        <button className='bg-red-100 text-red-500 px-5 py-2 rounded-full text-sm font-medium hover:bg-red-200 transition-all'>
                                            Reject
                                        </button>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                {/* RIGHT SECTION */}
                <div className='space-y-6'>

                    {/* UPCOMING */}
                    <div className='bg-white rounded-3xl border border-gray-200 p-6 shadow-sm'>

                        <h2 className='text-xl font-bold text-gray-800'>
                            Upcoming Broadcasts
                        </h2>

                        <p className='text-sm text-gray-400 mt-1'>
                            Today
                        </p>

                        <div className='space-y-4 mt-6'>

                            <div className='border border-gray-200 rounded-2xl p-4'>

                                <h3 className='font-semibold text-gray-800'>
                                    Calculus Midterm Paper
                                </h3>

                                <p className='text-sm text-gray-400 mt-2'>
                                    Priya Shah · 09:00 — 09:30
                                </p>

                            </div>

                            <div className='border border-gray-200 rounded-2xl p-4'>

                                <h3 className='font-semibold text-gray-800'>
                                    Biology Cell Structure
                                </h3>

                                <p className='text-sm text-gray-400 mt-2'>
                                    Marcus Lee · 10:00 — 10:10
                                </p>

                            </div>

                            <div className='border border-gray-200 rounded-2xl p-4'>

                                <h3 className='font-semibold text-gray-800'>
                                    World History Slides
                                </h3>

                                <p className='text-sm text-gray-400 mt-2'>
                                    Aisha Khan · 11:00 — 11:20
                                </p>

                            </div>

                        </div>

                        {/* GRAPH PLACEHOLDER */}
                        <div className='mt-6 border border-gray-200 rounded-2xl h-[120px] flex items-center justify-center text-gray-300 text-sm'>
                            Rotation Timeline
                        </div>

                    </div>

                    {/* QUICK ACTIONS */}
                    <div className='bg-white rounded-3xl border border-gray-200 p-6 shadow-sm'>

                        <h2 className='text-xl font-bold text-gray-800'>
                            Quick Actions
                        </h2>

                        <p className='text-sm text-gray-400 mt-1'>
                            Manage
                        </p>

                        <div className='grid grid-cols-2 gap-4 mt-6'>

                            <button className='bg-indigo-600 hover:bg-indigo-700 transition-all text-white py-3 rounded-2xl text-sm font-medium'>
                                New Upload
                            </button>

                            <button className='border border-gray-300 hover:bg-gray-100 transition-all py-3 rounded-2xl text-sm font-medium'>
                                Bulk Approve
                            </button>

                            <button className='border border-gray-300 hover:bg-gray-100 transition-all py-3 rounded-2xl text-sm font-medium'>
                                Schedule
                            </button>

                            <button className='border border-gray-300 hover:bg-gray-100 transition-all py-3 rounded-2xl text-sm font-medium'>
                                Export
                            </button>

                        </div>

                    </div>

                    {/* LIVE MONITOR */}
                    <div className='bg-white rounded-3xl border border-gray-200 p-6 shadow-sm'>

                        <div className='flex items-center justify-between'>

                            <div>

                                <h2 className='text-xl font-bold text-gray-800'>
                                    Broadcasting Live Monitor
                                </h2>

                                <p className='text-sm text-gray-400 mt-1'>
                                    Overview of current rotation
                                </p>

                            </div>

                            <button className='bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm'>
                                Manage
                            </button>

                        </div>

                        {/* LIVE CARD */}
                        <div className='border border-gray-200 rounded-2xl p-5 mt-6'>

                            <p className='text-sm text-gray-400'>
                                Active
                            </p>

                            <div className='flex items-center justify-between mt-3'>

                                <div>

                                    <h3 className='font-semibold text-gray-800 text-lg'>
                                        Calculus Midterm Paper 2026
                                    </h3>

                                    <p className='text-sm text-gray-400 mt-1'>
                                        Priya Shah · Mathematics
                                    </p>

                                </div>

                                <div className='text-right'>

                                    <p className='text-sm text-gray-400'>
                                        Rotation
                                    </p>

                                    <h3 className='text-2xl font-bold text-gray-800 mt-1'>
                                        00:18
                                    </h3>

                                </div>

                            </div>

                            {/* QUEUE */}
                            <div className='mt-6 space-y-4'>

                                <div className='flex items-center justify-between'>

                                    <div>

                                        <h4 className='font-medium text-gray-700'>
                                            Biology Cell Structure
                                        </h4>

                                        <p className='text-xs text-gray-400 mt-1'>
                                            Marcus Lee · 10:00
                                        </p>

                                    </div>

                                    <p className='text-sm text-gray-400'>
                                        00:20
                                    </p>

                                </div>

                                
                                <div className='flex items-center justify-between'>

                                    <div>

                                        <h4 className='font-medium text-gray-700'>
                                            World History Slides
                                        </h4>

                                        <p className='text-xs text-gray-400 mt-1'>
                                            Aisha Khan · 11:00
                                        </p>

                                    </div>

                                    <p className='text-sm text-gray-400'>
                                        00:45
                                    </p>

                                </div>

                            </div>

                            {/* CHART */}
                            <div className='mt-6 border border-gray-200 rounded-2xl h-[120px] flex items-center justify-center text-gray-300 text-sm'>
                                Subject Distribution
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* FOOTER HELP */}
            <div className='bg-white rounded-3xl border border-gray-200 p-5 shadow-sm mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-5'>

                <div>

                    <h3 className='font-semibold text-gray-800'>
                        Need assistance?
                    </h3>

                    <p className='text-sm text-gray-400 mt-1'>
                        Visit our help center or contact your account manager for onboarding support.
                    </p>

                </div>

                <div className='flex items-center gap-3'>

                    <button className='border border-gray-300 px-5 py-3 rounded-full hover:bg-gray-100 transition-all text-sm'>
                        Help Center
                    </button>

                    <button className='bg-indigo-600 hover:bg-indigo-700 transition-all text-white px-5 py-3 rounded-full text-sm'>
                        Contact Support
                    </button>

                </div>

            </div>

        </div>

    );

};

export default Dashboard;