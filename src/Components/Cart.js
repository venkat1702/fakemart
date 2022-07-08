import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 5,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 2px',
  },
}));

export default function CustomizedBadges() {
  const count=useSelector(state=>state.details)
  let total=0
  count.map((item)=>{
    total+=item.count
  })
  const navigate = useNavigate();
  return (
    <IconButton   aria-label="cart">
      <StyledBadge onClick={()=>{navigate("/out")}} badgeContent={total } color="secondary">
        <ShoppingCartIcon sx={{ color:'white'}}/>
      </StyledBadge>
    </IconButton>
  );
}
