import { ReactElement, useState } from "react";
import 'CheckBox.scss'

type Props = {
    label: ReactElement;
    checked: boolean;
}

const Checkbox = ({ label, checked, ...props }: Props) => {
    const defaultChecked = checked ? checked : false;
    const [isChecked, setIsChecked] = useState(defaultChecked);

    return (
        <div className="checkbox-wrapper">
            <label>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => setIsChecked((prev) => !prev)}
                    {...props}
                />
            </label>
        </div>
    );
};

export default Checkbox;