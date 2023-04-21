import styled from '@mui/material/styles/styled'
import { alpha, FormControl, InputBase, InputLabel } from '@mui/material'
import React from 'react'
import { InputComponent } from './types'
import styles from './Input.module.scss'

const Input: InputComponent = ({ label, className, ...other }) => {
  return (
    <FormControl className={className} sx={{ display: 'block' }} fullWidth>
      <LabelCustom shrink htmlFor={other.id} className={styles.label}>
        {label}
      </LabelCustom>
      <InputCustom {...other}/>
    </FormControl>
  )
}

const LabelCustom = styled(InputLabel)(({ theme }) => ({
  '&.MuiInputLabel-root': {
    position: 'initial',
    marginBottom: '0.5rem',
    transform: 'none',

    '&.Mui-focused': {
      color: '#2B2B2B',
    },
  },
}))

const InputCustom = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(0),
  },
  '& .MuiInputBase-input': {
    backgroundColor: 'var(--substrate2)',
    color: 'var(--main-text)',
    fontSize: '1rem',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:focus': {
      boxShadow: `#767676 0 0 0 0.1rem`,
    },
  },
}))

export default Input