#![cfg_attr(not(feature = "std"), no_std)]
#![allow(clippy::too_many_arguments)]
#![allow(clippy::unnecessary_mut_passed)]

//use frame_support::{dispatch::DispatchResultWithPostInfo}; //, dispatch::DispatchResult};

// Here we declare the runtime API. It is implemented it the `impl` block in
// runtime amalgamator file (the `runtime/src/lib.rs`)
sp_api::decl_runtime_apis! {
	pub trait ExchangeApi {
		fn submit_order() -> u32;
		//fn exchange() -> u32;
	}
}
