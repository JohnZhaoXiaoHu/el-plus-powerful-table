import { defineComponent, PropType, h, inject } from "vue";
import type { PowerfulTableHeaderProps } from '../../../types/powerful-table'

export default defineComponent({
  props: {
    row: {
      type: Object,
      default: () => {}
    },
    index: Number,
    prop: {
      type: Object as PropType<PowerfulTableHeaderProps<any>>,
      default: () => {}
    },
    align: {
      type: String,
      default: 'center'
    }
  },
  emits: ['returnEmit'],
  setup(props, { emit }) {
    const justifyFun = inject('justifyFun') as Function

    return () => (
      <div style={{display: 'flex', alignItems: 'center', width: '100%', justifyContent: justifyFun(props.align)}}>
        <span style={{marginRight: props.prop.text ? '10px' : '0px'}}>
          { props.prop.text || "" }
        </span>
        { props.prop.render?.(h, props.row, props.index as number) }
      </div>
    )
  }
})