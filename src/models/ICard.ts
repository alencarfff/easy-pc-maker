export type ICard = {
  /**
   * OnClick event handler
   */
  onClick?: Function;
  /**
   * Card title
   */
  title: string;
  /**
   * Card image URL
   */
  imageUrl: string;
  /**
   * Card description
   */
  description?: string;
};
