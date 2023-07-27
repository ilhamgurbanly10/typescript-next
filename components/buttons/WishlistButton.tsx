import React, {useMemo} from 'react';
import useAddToWishlist from '../../hooks/useAddToWishlist';
import { WishlistButton } from '../../interfaces/Buttons';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { JSX } from '../../interfaces/Conditions';

const WishlistButton: React.FC<WishlistButton> = ({ inWishlist, slug }) => {
  
  const {addToWishlist} = useAddToWishlist();

  const icons = useMemo<JSX>(() => {
      return {
          'false': <HeartOutlined style={{color: "white", fontSize: "25px"}}/>,
          'true': <HeartFilled style={{color: "red", fontSize: "23px"}}/>
      }
  }, [])

  return (
    <button onClick={() => { addToWishlist(slug, inWishlist) }} className="btn-grow-on-hover">
      {icons[Boolean(inWishlist).toString()]}
    </button>
  );
};

export default WishlistButton;