interface KeypadViewProps { 
    currentExpression: string[]; 
    updateCurrentExpression: (value: string[]) => void;
    calculate: () => void; 
}

export default function KeypadView({
    currentExpression, 
    updateCurrentExpression, 
    calculate 
}: KeypadViewProps): JSX.Element { 

    const appendNumber = (num: string) => {
        const last = currentExpression[currentExpression.length - 1];

        if (last && /^[0-9.]+$/.test(last)) {
            const updated = [...currentExpression];
            updated[updated.length - 1] = last + num;

            updateCurrentExpression(updated);
        } else {
            updateCurrentExpression([...currentExpression, num]);
        }
    }

    return (
        <div className="d-flex flex-row w-100 bg-primary-subtle gap-2 p-2">
            <div className="d-flex flex-column h-100 gap-2">
                <button type="button" className="btn btn-secondary btn-lg font-monospace" onClick={() => updateCurrentExpression([])}> 
                    &nbsp;C&nbsp; 
                </button> 
                <button type="button" className="btn btn-light btn-lg font-monospace" onClick={() => appendNumber("7")}> 
                    7 
                </button> 
                <button type="button" className="btn btn-light btn-lg font-monospace" onClick={() => appendNumber("4")}> 
                    4 
                </button> 
                <button type="button" className="btn btn-light btn-lg font-monospace" onClick={() => appendNumber("1")}> 
                    1 
                </button> 
                <button type="button" className="btn btn-light btn-lg font-monospace" onClick={() => appendNumber("0")}> 
                    0 
                </button> 
            </div> 
            <div className="d-flex flex-column h-100 gap-2"> 
                <button type="button" className="btn btn-secondary btn-lg font-monospace" onClick={() => updateCurrentExpression([...currentExpression, "("])}> 
                    &nbsp;(&nbsp; 
                </button> 
                <button type="button" className="btn btn-light btn-lg font-monospace" onClick={() => appendNumber("8")}> 
                    8 
                </button>
                <button type="button" className="btn btn-light btn-lg font-monospace" onClick={() => appendNumber("5")}> 
                    5 
                </button> 
                <button type="button" className="btn btn-light btn-lg font-monospace" onClick={() => appendNumber("2")}> 
                    2 
                </button> 
                <button type="button" className="btn btn-light btn-lg font-monospace" onClick={() => appendNumber(".")}>
                    . 
                </button> 
            </div> 
            <div className="d-flex flex-column h-100 gap-2"> 
                <button type="button" className="btn btn-secondary btn-lg font-monospace" onClick={() => updateCurrentExpression([...currentExpression, ")"])}>
                    &nbsp;)&nbsp; 
                </button> 
                <button type="button" className="btn btn-light btn-lg font-monospace" onClick={() => appendNumber("9")}> 
                    9 
                </button> 
                <button type="button" className="btn btn-light btn-lg font-monospace" onClick={() => appendNumber("6")}> 
                    6 
                </button> 
                <button type="button" className="btn btn-light btn-lg font-monospace" onClick={() => appendNumber("3")}> 
                    3 
                </button> 
                <button type="button" className="btn btn-light btn-lg font-monospace" onClick={() => updateCurrentExpression([...currentExpression, "%"])}>
                    % 
                </button> 
            </div> 
            <div className="d-flex flex-column h-100 gap-2"> 
                <button type="button" className="btn btn-secondary btn-lg font-monospace" onClick={() => updateCurrentExpression([...currentExpression, "mod"])}> 
                    mod 
                </button> 
                <button type="button" className="btn btn-light btn-lg font-monospace" onClick={() => updateCurrentExpression([...currentExpression, "/"])}>
                    / 
                </button> 
                <button type="button" className="btn btn-light btn-lg font-monospace" onClick={() => updateCurrentExpression([...currentExpression, "x"])}> 
                    x
                </button> 
                <button type="button" className="btn btn-light btn-lg font-monospace" onClick={() => updateCurrentExpression([...currentExpression, "-"])}>
                    - 
                </button> 
                <button type="button" className="btn btn-light btn-lg font-monospace" onClick={() => updateCurrentExpression([...currentExpression, "+"])}>
                    + 
                </button> 
            </div> 
            <div className="d-flex flex-column h-100 gap-2"> 
                <button type="button" className="btn btn-light btn-lg font-monospace" onClick={() => updateCurrentExpression([...currentExpression, "π"])}>
                    &nbsp;&#x3C0;&nbsp;
                </button> 
                <button type="button" className="btn btn-light btn-lg font-monospace" onClick={() => updateCurrentExpression([...currentExpression, "sqrt("])}> 
                    &#x221A; 
                </button> 
                <button type="button" className="btn btn-light btn-lg font-monospace" onClick={() => updateCurrentExpression([...currentExpression, "^"])}> 
                    x<sup>y</sup> 
                </button> 
                <button type="button" className="btn btn-light btn-lg font-monospace" onClick={() => updateCurrentExpression([...currentExpression, "!"])}>
                    ! 
                </button> 
            </div> 
            <div className="d-flex flex-column h-100 gap-2"> 
                <button type="button" className="btn btn-secondary btn-lg font-monospace" onClick={() => updateCurrentExpression([...currentExpression.slice(0, -1)])}>
                    &nbsp;&#x232B;&nbsp; 
                </button> 
                <button type="button" className="btn btn-light btn-lg font-monospace" onClick={() => updateCurrentExpression([...currentExpression, "log2("])}> 
                    lb 
                </button> 
                <button type="button" className="btn btn-light btn-lg font-monospace" onClick={() => updateCurrentExpression([...currentExpression, "log10("])}> 
                    lg 
                </button> 
                <button type="button" className="btn btn-light btn-lg font-monospace" onClick={() => updateCurrentExpression([...currentExpression, "log("])}> 
                    ln 
                </button> 
                <button type="button" className="btn btn-warning btn-lg font-monospace" onClick={() => calculate()}> 
                    = 
                </button> 
            </div> 
        </div> 
    ); 
} 