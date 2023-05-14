// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class BotRegistered extends ethereum.Event {
  get params(): BotRegistered__Params {
    return new BotRegistered__Params(this);
  }
}

export class BotRegistered__Params {
  _event: BotRegistered;

  constructor(event: BotRegistered) {
    this._event = event;
  }

  get botAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get isBot(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }

  get score(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class BotRepo__botRepositoryResult {
  value0: boolean;
  value1: BigInt;

  constructor(value0: boolean, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getIsBot(): boolean {
    return this.value0;
  }

  getScore(): BigInt {
    return this.value1;
  }
}

export class BotRepo extends ethereum.SmartContract {
  static bind(address: Address): BotRepo {
    return new BotRepo("BotRepo", address);
  }

  botRepository(param0: Address): BotRepo__botRepositoryResult {
    let result = super.call(
      "botRepository",
      "botRepository(address):(bool,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new BotRepo__botRepositoryResult(
      result[0].toBoolean(),
      result[1].toBigInt()
    );
  }

  try_botRepository(
    param0: Address
  ): ethereum.CallResult<BotRepo__botRepositoryResult> {
    let result = super.tryCall(
      "botRepository",
      "botRepository(address):(bool,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new BotRepo__botRepositoryResult(
        value[0].toBoolean(),
        value[1].toBigInt()
      )
    );
  }

  getScore(_address: Address): BigInt {
    let result = super.call("getScore", "getScore(address):(uint256)", [
      ethereum.Value.fromAddress(_address)
    ]);

    return result[0].toBigInt();
  }

  try_getScore(_address: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getScore", "getScore(address):(uint256)", [
      ethereum.Value.fromAddress(_address)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isBot(_address: Address): boolean {
    let result = super.call("isBot", "isBot(address):(bool)", [
      ethereum.Value.fromAddress(_address)
    ]);

    return result[0].toBoolean();
  }

  try_isBot(_address: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isBot", "isBot(address):(bool)", [
      ethereum.Value.fromAddress(_address)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class RegisterCall extends ethereum.Call {
  get inputs(): RegisterCall__Inputs {
    return new RegisterCall__Inputs(this);
  }

  get outputs(): RegisterCall__Outputs {
    return new RegisterCall__Outputs(this);
  }
}

export class RegisterCall__Inputs {
  _call: RegisterCall;

  constructor(call: RegisterCall) {
    this._call = call;
  }

  get _address(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _isBot(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }

  get _score(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class RegisterCall__Outputs {
  _call: RegisterCall;

  constructor(call: RegisterCall) {
    this._call = call;
  }
}