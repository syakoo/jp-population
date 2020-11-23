import styled from 'styled-components'
import Skeleton from '@material-ui/lab/Skeleton'
import React from 'react'

// ____________________
//
interface LoadingSkeletonsProps {
  num: number
}

// ____________________
//
export const LoadingSkeletons: React.FC<LoadingSkeletonsProps> = React.memo(
  ({ num }) => {
    const arr = []
    for (var i = 0; i < num; i++) {
      arr[i] = i
    }

    return (
      <>
        {arr.map((_, i) => (
          <_LoadingSkeleton key={i} data-testid="skeleton">
            <Skeleton variant="rect" width={12} height={12} />
            <Skeleton variant="rect" width={50} height={12} />
          </_LoadingSkeleton>
        ))}
      </>
    )
  }
)

// ____________________
//
const _LoadingSkeleton = styled.span`
  display: inline-block;
  margin: 0.2rem;

  span {
    display: inline-block;
    margin: 0px 0.2rem;
  }
`
