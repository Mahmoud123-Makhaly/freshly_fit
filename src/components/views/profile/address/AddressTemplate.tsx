import React, { useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import toast from 'react-hot-toast';
import { notFound } from 'next/navigation';

import { Actions } from '@libs/actions';
import { DTO } from '@tot/core/types';
import user from '@assets/images/icons/chechout/fi-rs-user.svg';
import location from '@assets/images/icons/chechout/location.svg';
import phone from '@assets/images/icons/chechout/fi-rs-phone-pause.svg';
import { useTranslate } from '@app/hooks';
import { ButtonMaker, Modal, ImageWithFallback } from '@components';
import { useRouter } from '@navigation';
import { Utils } from '@libs';

import RemoveAddressModal from './RemoveAddressModal';

const AddressTemplate = ({
  data,
  onEdit,
}: {
  data: DTO.IMemberAddressDTO;
  onEdit: (address: DTO.IMemberAddressDTO) => void;
}) => {
  const t = useTranslate('COMP_Address_Template');
  const [deleteModal, setDeleteModal] = useState(false);
  const [isDefault, setIsDefault] = useState(data.isDefault);
  const [isDisabled, setIsDisabled] = useState('');
  const { data: session } = useSession();
  const router = useRouter();

  const onDismiss = () => {
    setDeleteModal(false);
    router.push('/profile/address');
  };

  if (!session || !session.isAuthorized || !session.user?.memberId) notFound();

  const onIsDefaultChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDisabled(() => ' disabled');

    const updatedAddress = {
      ...(Utils.cleanEmpty(data) as DTO.IMemberAddressDTO),
      id: data.id!,
      key: data.id!,
      isDefault: e.currentTarget.checked,
    };

    const {
      data: updateStatus,
      serverError,
      validationErrors,
    } = await Actions.account.updateMyAddress({
      memberId: session.user!.memberId!,
      address: updatedAddress,
    });
    setIsDisabled(() => '');

    if (serverError || validationErrors || updateStatus?.error || !updateStatus?.data) {
      toast.error(t('GENERIC_ERR_MSG'), { position: 'top-center' });
      setIsDefault(data.isDefault);
    } else setIsDefault(!data.isDefault);
  };

  return (
    <div className={`border rounded p-2${isDisabled}`}>
      <div className="flex-between border-bottom mb-3 pb-2">
        <div className="d-flex align-items-center">
          <i
            className={`fa-solid fa-${data.addressType === 1 ? 'briefcase' : data.addressType === 2 ? 'house' : 'city'} mx-2`}
          ></i>
          <p>{t(data.addressType === 1 ? 'WORK' : data.addressType === 2 ? 'HOME' : 'OTHER')}</p>
        </div>
        {/* {data.addressType !== 3 && (
          <div className="d-flex  align-items-center pe-2">
            <Input type="checkbox" name="address" id={data.id} checked={isDefault} onChange={onIsDefaultChange} />
            <Label className="mb-0 ms-3" htmlFor={data.id}>
              {t('MARK_BASE_ADDRESS')}
            </Label>
          </div>
        )} */}
      </div>
      <div>
        <div className="border rounded p-3 d-flex my-2  align-items-center">
          <div className="pe-3">
            <ImageWithFallback src={user} alt={'user'} width={0} height={0} />
          </div>
          <p>{`${data?.firstName} ${data?.lastName}`}</p>
        </div>
        <div className="border rounded p-3 d-flex my-2  align-items-center">
          <div className="pe-3">
            <ImageWithFallback src={location} alt={'location'} width={0} height={0} />
          </div>
          <p>{data?.name ?? `${data?.countryCode},${data?.city},${data?.formattedAddress},${data?.regionName}`}</p>
        </div>
        <div className="border rounded p-3 d-flex  align-items-center">
          <div className="pe-3">
            <ImageWithFallback src={phone} alt={'phone'} width={0} height={0} />
          </div>
          <p>{data?.phone}</p>
        </div>
        <div className="flex-start border-top mt-3 py-2">
          <ButtonMaker
            onClick={() => {
              onEdit(data);
            }}
            design="bg-white border-0  py-0 d-flex align-items-center edit-btn"
          >
            <i className="fa-solid fa-pen mx-2 text-black icon"></i>
            <p className="text-info"> {t('EDIT')}</p>
          </ButtonMaker>
          <ButtonMaker
            onClick={() => setDeleteModal(true)}
            design="bg-white border-0  py-0 d-flex align-items-center edit-btn"
          >
            <i className="fa-regular fa-trash-can mx-2 text-black icon"></i>
            <p className="text-info"> {t('DELETE')}</p>
          </ButtonMaker>
        </div>
      </div>
      <Modal toggleShow={deleteModal}>
        <RemoveAddressModal onDismiss={onDismiss} address={data} />
      </Modal>
    </div>
  );
};

export default AddressTemplate;
