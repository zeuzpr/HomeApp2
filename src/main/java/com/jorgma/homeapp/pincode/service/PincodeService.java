package com.jorgma.homeapp.pincode.service;

import com.jorgma.homeapp.pincode.domain.Pincode;

import java.util.List;
import java.util.Optional;

/**
 * Created by jorgma on 2018-08-22.
 */
public interface PincodeService {

    Pincode createPincode(Pincode code);

    Optional<Pincode> getPincodeByCode(String code);

    List<Pincode> getPincodes();
}
