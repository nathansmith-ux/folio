import React from 'react'

function TestCard() {
  return (
    <div className='w-80 mx-auto'>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
        <div className="flex flex-col space-y-1.5 p-6 pb-0">
          <h3 className="whitespace-nowrap font-semibold tracking-tight text-2xl">Multiple Choice Test</h3>
          <div className="p-6 pt-0">
            <p className="text-sm font-medium leading-none">Choose the correct answer.</p>
          </div>
        </div>
        <div className="p-6 space-y-4">
          <p>What is the capital of France?</p>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium" htmlFor="paris">
                Paris
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium" htmlFor="london">
                London
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium" htmlFor="berlin">
                Berlin
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium" htmlFor="rome">
                Rome
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestCard
