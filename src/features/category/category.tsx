import { useState } from 'react'

import { useAppSelector, useAppDispatch } from '../../app/hooks'
import {
  categoryGet,
  categoryAll,
  categoryList
} from './categorySlice'
import styles from './category.module.css'

function Category() {
  const dispatch = useAppDispatch()
  const list = useAppSelector(categoryList)

  console.log('Category list:', list);
  

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(categoryAll())}
        >
          -
        </button>
        <span className={styles.value}>0000</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(categoryAll())}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default Category
