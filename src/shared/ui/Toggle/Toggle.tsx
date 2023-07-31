import classNames from 'classnames';

import styles from './Toggle.module.scss';

type TToggleProps = {
  value: boolean;
  label?: string;
  onChange?: (arg0: boolean) => void;
}

function Toggle({ value, label = '', onChange }: TToggleProps) {
  function changeHandler(evt: React.ChangeEvent<HTMLInputElement>) {
    onChange && onChange(evt.currentTarget.checked);
  }

  return (
    <label className={styles.main}>
      <input
        className={styles.origin}
        type="checkbox"
        checked={value}
        onChange={changeHandler}
      />
      <div className={classNames(styles.pseudo, {[styles.checked]: value})}></div>
      <span className={styles.text}>{label}</span>
    </label>
  )
}

export { Toggle };