import { ThunkT } from '../reducers/store'
import { SET_LOADING_CONTACT_FORM } from '../reducers/service/serviceReducer'
import { ServiceActionT } from '../reducers/service/types'
import { ContactValuesT } from '../components/Home/Contact/types'
import * as api from '../api'
import { notistackActions } from './notistackAction'
import { NotistackActionT } from '../reducers/notistack/types'

export const serviceActions = {
  setLoadingContactFormAC: (flag: boolean) =>
    ({
      type: SET_LOADING_CONTACT_FORM,
      flag,
    } as const),
}

export const sendMessageFromContactFormThunk =
  (formData: ContactValuesT, resetForm: () => void): ThunkT<ServiceActionT | NotistackActionT> =>
  async (dispatch) => {
    try {
      dispatch(serviceActions.setLoadingContactFormAC(true))
      await api.sendMessageFromContactForm(formData)
      resetForm()
    } catch (e) {
      console.log(e)
    } finally {
      dispatch(serviceActions.setLoadingContactFormAC(false))
      dispatch(
        notistackActions.enqueueSnackbarAC({
          message: 'Message successfully sent!',
          options: {
            variant: 'success',
          },
        })
      )
    }
  }
