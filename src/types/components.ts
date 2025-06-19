export interface IButton {
  text: string;
  type: 'button' | 'submit' | 'reset';
  className?: string;
  img?: string;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
}
