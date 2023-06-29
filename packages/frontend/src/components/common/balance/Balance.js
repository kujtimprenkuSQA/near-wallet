import React from 'react';
import { useSelector } from 'react-redux';

import BalanceDisplay from './BalanceDisplay';
import { selectNearTokenFiatValueUSD } from '../../../redux/slices/tokenFiatValues';

const Balance = ({
    totalAmount,
    amount,
    showSymbolNEAR,
    className,
    showBalanceInNEAR,
    showBalanceInUSD,
    showAlmostEqualSignUSD,
    showSignUSD,
    showSymbolUSD,
    'data-test-id': testId 
}) => {
    const nearTokenFiatValueUSD = useSelector(selectNearTokenFiatValueUSD);

    return (
        <BalanceDisplay
            totalAmount={totalAmount}
            amount={amount}
            showSymbolNEAR={showSymbolNEAR}
            className={className}
            showBalanceInNEAR={showBalanceInNEAR}
            showBalanceInUSD={showBalanceInUSD}
            nearTokenFiatValueUSD={nearTokenFiatValueUSD}
            showAlmostEqualSignUSD={showAlmostEqualSignUSD}
            showSignUSD={showSignUSD}
            showSymbolUSD={showSymbolUSD}
            data-test-id={testId}
        />
    );
};

export default Balance;
