var a00018 =
[
    [ "pdm_channel_config_t", "a00018.html#a00181", [
      [ "cutOffFreq", "a00018.html#a892c726c35fa841ac00ae2c53aa5fc70", null ],
      [ "gain", "a00018.html#a44f9e948fecd2aa21158208d1a1345c5", null ]
    ] ],
    [ "pdm_config_t", "a00018.html#a00182", [
      [ "enableDoze", "a00018.html#a52ea2cadf34eadcd38311cb1ea3a7c2a", null ],
      [ "fifoWatermark", "a00018.html#a3db11fc707c217446032a7d7c408203c", null ],
      [ "qualityMode", "a00018.html#af5a7749baf36467e4668c58d909dc8f1", null ],
      [ "cicOverSampleRate", "a00018.html#a8cc4f599b9ecf6bf905933155ce3ee16", null ]
    ] ],
    [ "pdm_hwvad_config_t", "a00018.html#a00183", [
      [ "channel", "a00018.html#ae44bdb0573a7a718adaeb712d0172f86", null ],
      [ "initializeTime", "a00018.html#a1b0b76c560e10d787d70273db9a6a971", null ],
      [ "cicOverSampleRate", "a00018.html#a15f02e72862a7e74271a2cd4c6614687", null ],
      [ "inputGain", "a00018.html#a26d82c5363e9d7fb5a1901ed72d90847", null ],
      [ "frameTime", "a00018.html#a51de7b9ec9809d7834682dcaf1da38c6", null ],
      [ "cutOffFreq", "a00018.html#ab0fedec49ddafb0931d41c93834e4186", null ],
      [ "enableFrameEnergy", "a00018.html#aec6b8ca63093fcb7073734ea12d6e35a", null ],
      [ "enablePreFilter", "a00018.html#a8b9257c5f3a1d8e875f83bbe52870b98", null ]
    ] ],
    [ "pdm_hwvad_noise_filter_t", "a00018.html#a00184", [
      [ "enableAutoNoiseFilter", "a00018.html#a5bb168231a196e9e513ec6e8d0378a1b", null ],
      [ "enableNoiseMin", "a00018.html#afabdf9985504adde1f491d7d5bced266", null ],
      [ "enableNoiseDecimation", "a00018.html#acea1e92f33e2c8f63e7c2fdd35e73bb3", null ],
      [ "enableNoiseDetectOR", "a00018.html#ad5c4951dea3efce806d1dafde29bdfd3", null ],
      [ "noiseFilterAdjustment", "a00018.html#aa9df6cdbf47ef4eaf06f29bff548a8bd", null ],
      [ "noiseGain", "a00018.html#ade6a68f4d654916e434895fea2479757", null ]
    ] ],
    [ "pdm_hwvad_zero_cross_detector_t", "a00018.html#a00186", [
      [ "enableAutoThreshold", "a00018.html#a85356b87a791c5cf53a4193869d3fd3e", null ],
      [ "zcdAnd", "a00018.html#a3c5f375530d6bf5ee157480f709f46c7", null ],
      [ "threshold", "a00018.html#a4e2528d882836eea6a8387efd9cacf19", null ],
      [ "adjustmentThreshold", "a00018.html#add34bccb6c0392bdea758735e72b1ec8", null ]
    ] ],
    [ "pdm_transfer_t", "a00018.html#a00187", [
      [ "data", "a00018.html#a4ba616d801fccc52f3d73364746f677b", null ],
      [ "dataSize", "a00018.html#a8af478d5a7369fc2c00715231fe34467", null ]
    ] ],
    [ "pdm_hwvad_notification_t", "a00018.html#a00185", null ],
    [ "pdm_handle_t", "a00018.html#a00145", [
      [ "state", "a00018.html#ab2b16dd293c06768cbca8eea7a37a514", null ],
      [ "callback", "a00018.html#a9930728ef1b19dc11541c140bace0cc3", null ],
      [ "userData", "a00018.html#a1e2468882ba36fdf414fb068d5f6c294", null ],
      [ "pdmQueue", "a00018.html#aca127efd0ded14635efeb00ab6950a07", null ],
      [ "transferSize", "a00018.html#a023ee573d404bae6eeeb0a6a32b942ab", null ],
      [ "queueUser", "a00018.html#a58278b4200597c00c3fa3119b467d61a", null ],
      [ "queueDriver", "a00018.html#acf9afbf2d6fe6f813ca25aca3fc2375a", null ],
      [ "format", "a00018.html#a929a81b45d89538c170713fbb52fba1e", null ],
      [ "watermark", "a00018.html#a98799b1fb7cdc40650b0aef7e90e9bb4", null ],
      [ "startChannel", "a00018.html#aa72f6d022e4e8e8c75637b4c5ba48e55", null ],
      [ "channelNums", "a00018.html#a9b4fee885caaf8f085a42629b91eceeb", null ]
    ] ],
    [ "FSL_PDM_DRIVER_VERSION", "a00018.html#ga3cb4702a9e581e2633e1c1bb3c63801f", null ],
    [ "PDM_XFER_QUEUE_SIZE", "a00018.html#ga04b7c7654ce66f908e162bac8c78ffb1", null ],
    [ "pdm_transfer_callback_t", "a00018.html#gaf29cd20432f325217c7c12e59638416c", null ],
    [ "pdm_hwvad_callback_t", "a00018.html#gadd2a341c59f5f8c4c619b62c4ebc4dcd", [
      [ "kStatus_PDM_Busy", "a00018.html#ggac36f475ca5b446f4fde4c9b90bec77c8a7fd57efdf5fd862d82ad3ddc4061995b", null ],
      [ "kStatus_PDM_FIFO_ERROR", "a00018.html#ggac36f475ca5b446f4fde4c9b90bec77c8ac8731f691ed5f103dc9dbed6a9d16e34", null ],
      [ "kStatus_PDM_QueueFull", "a00018.html#ggac36f475ca5b446f4fde4c9b90bec77c8a852dac50df76ac041f7957defb71e418", null ],
      [ "kStatus_PDM_Idle", "a00018.html#ggac36f475ca5b446f4fde4c9b90bec77c8ad838969e71909e93ae67e4442bd708d4", null ],
      [ "kStatus_PDM_Output_ERROR", "a00018.html#ggac36f475ca5b446f4fde4c9b90bec77c8af84c6de81d1988497b194e68879ee6e7", null ],
      [ "kStatus_PDM_ChannelConfig_Failed", "a00018.html#ggac36f475ca5b446f4fde4c9b90bec77c8adbbcb06d87bf89f8261aeac797bd00a7", null ],
      [ "kStatus_PDM_HWVAD_VoiceDetected", "a00018.html#ggac36f475ca5b446f4fde4c9b90bec77c8acecab396522a28825b2659f409cf88e9", null ],
      [ "kStatus_PDM_HWVAD_Error", "a00018.html#ggac36f475ca5b446f4fde4c9b90bec77c8a8c976cbaec7a3ae9270e4bc4f6cba2fc", null ]
    ] ],
    [ "_pdm_interrupt_enable", "a00018.html#ga96a0bbb4423bd38dbbd5e0a84a1ca74e", [
      [ "kPDM_ErrorInterruptEnable", "a00018.html#gga96a0bbb4423bd38dbbd5e0a84a1ca74ea82f28d19050e81b6d92fa779d2de3bfa", null ],
      [ "kPDM_FIFOInterruptEnable", "a00018.html#gga96a0bbb4423bd38dbbd5e0a84a1ca74eaa864b8be75f57df467fe622065a15543", null ]
    ] ],
    [ "_pdm_internal_status", "a00018.html#gade2e6b8e8a7ad0a3687d2039ca9ea61f", [
      [ "kPDM_StatusDfBusyFlag", "a00018.html#ggade2e6b8e8a7ad0a3687d2039ca9ea61faa0ee37826102798ea83ab7c414859140", null ],
      [ "kPDM_StatusFIRFilterReady", "a00018.html#ggade2e6b8e8a7ad0a3687d2039ca9ea61fa2508306fe92f36233da5046f1794bb8d", null ],
      [ "kPDM_StatusCh0FifoDataAvaliable", "a00018.html#ggade2e6b8e8a7ad0a3687d2039ca9ea61fa555dfd48c509c96f984efe38ae9aca5e", null ],
      [ "kPDM_StatusCh1FifoDataAvaliable", "a00018.html#ggade2e6b8e8a7ad0a3687d2039ca9ea61fab1610f3382ba0fc5db66de9757a6e50d", null ],
      [ "kPDM_StatusCh2FifoDataAvaliable", "a00018.html#ggade2e6b8e8a7ad0a3687d2039ca9ea61fab246d882d5af897467624bca5708e7c4", null ],
      [ "kPDM_StatusCh3FifoDataAvaliable", "a00018.html#ggade2e6b8e8a7ad0a3687d2039ca9ea61fa6af0946e34e93e3439431d9331bad54f", null ],
      [ "kPDM_StatusCh4FifoDataAvaliable", "a00018.html#ggade2e6b8e8a7ad0a3687d2039ca9ea61fa174ad2212c31f667066a1caf15ebefe9", null ],
      [ "kPDM_StatusCh5FifoDataAvaliable", "a00018.html#ggade2e6b8e8a7ad0a3687d2039ca9ea61faf2f187d6e46ef986948da8248242d763", null ],
      [ "kPDM_StatusCh6FifoDataAvaliable", "a00018.html#ggade2e6b8e8a7ad0a3687d2039ca9ea61facf65681607e7086f7a63288bd9a2ce6d", null ],
      [ "kPDM_StatusCh7FifoDataAvaliable", "a00018.html#ggade2e6b8e8a7ad0a3687d2039ca9ea61fae33c7cb0ac352989b973535fee83e9cf", null ]
    ] ],
    [ "_pdm_channel_enable_mask", "a00018.html#gaaf71be00b7ec6bb8fec4c3b9a61f9f82", [
      [ "kPDM_EnableChannel0", "a00018.html#ggaaf71be00b7ec6bb8fec4c3b9a61f9f82af14f6b690648d6b358c6f2415cdb2ca0", null ],
      [ "kPDM_EnableChannel1", "a00018.html#ggaaf71be00b7ec6bb8fec4c3b9a61f9f82aafd55708d21c64f5aebbcf09d6838f94", null ],
      [ "kPDM_EnableChannel2", "a00018.html#ggaaf71be00b7ec6bb8fec4c3b9a61f9f82ab367a6050c432666b79f397a26fc05aa", null ],
      [ "kPDM_EnableChannel3", "a00018.html#ggaaf71be00b7ec6bb8fec4c3b9a61f9f82a5ce41ab4a53fa8147c8953285829be8b", null ],
      [ "kPDM_EnableChannel4", "a00018.html#ggaaf71be00b7ec6bb8fec4c3b9a61f9f82a069a0cf9dd7fa8306ed16029c8c974fc", null ],
      [ "kPDM_EnableChannel5", "a00018.html#ggaaf71be00b7ec6bb8fec4c3b9a61f9f82a760ed52fb8908609b88f129837d41fd8", null ],
      [ "kPDM_EnableChannel6", "a00018.html#ggaaf71be00b7ec6bb8fec4c3b9a61f9f82a4326a8908987334f3be5c51f45c81a93", null ],
      [ "kPDM_EnableChannel7", "a00018.html#ggaaf71be00b7ec6bb8fec4c3b9a61f9f82a8c017d550077304f3da8babcf71e0f3b", null ]
    ] ],
    [ "_pdm_fifo_status", "a00018.html#gacb5d2d39dd26e12891236046cb2da582", [
      [ "kPDM_FifoStatusUnderflowCh0", "a00018.html#ggacb5d2d39dd26e12891236046cb2da582a69242dadb743d54a32aa554c09edece5", null ],
      [ "kPDM_FifoStatusUnderflowCh1", "a00018.html#ggacb5d2d39dd26e12891236046cb2da582aee04d169c0886d0e8fc7bfa06549c43a", null ],
      [ "kPDM_FifoStatusUnderflowCh2", "a00018.html#ggacb5d2d39dd26e12891236046cb2da582ab10d22a2103f83ba3e4adb2e67429d56", null ],
      [ "kPDM_FifoStatusUnderflowCh3", "a00018.html#ggacb5d2d39dd26e12891236046cb2da582ae11c7a777dc10a3dc161865055eb26f5", null ],
      [ "kPDM_FifoStatusUnderflowCh4", "a00018.html#ggacb5d2d39dd26e12891236046cb2da582a59f1d4373ee7913de27c112d8db9630c", null ],
      [ "kPDM_FifoStatusUnderflowCh5", "a00018.html#ggacb5d2d39dd26e12891236046cb2da582aff7237a62a151dc87eac9aec1f4ad608", null ],
      [ "kPDM_FifoStatusUnderflowCh6", "a00018.html#ggacb5d2d39dd26e12891236046cb2da582aa0e483bb8716b44df3b66e5455bb675e", null ],
      [ "kPDM_FifoStatusUnderflowCh7", "a00018.html#ggacb5d2d39dd26e12891236046cb2da582aa57237c97a87b6523f300c72a48c3503", null ],
      [ "kPDM_FifoStatusOverflowCh0", "a00018.html#ggacb5d2d39dd26e12891236046cb2da582a1593396f36040691de32965d8be3b488", null ],
      [ "kPDM_FifoStatusOverflowCh1", "a00018.html#ggacb5d2d39dd26e12891236046cb2da582a86b8dcf4fdcaeb9f33f9846fb0974d19", null ],
      [ "kPDM_FifoStatusOverflowCh2", "a00018.html#ggacb5d2d39dd26e12891236046cb2da582ab5e351e79672d17ef3c246fed7db8de2", null ],
      [ "kPDM_FifoStatusOverflowCh3", "a00018.html#ggacb5d2d39dd26e12891236046cb2da582ac42fe4e4bedd0cdfb91b3bb403a4c068", null ],
      [ "kPDM_FifoStatusOverflowCh4", "a00018.html#ggacb5d2d39dd26e12891236046cb2da582a72bf91b50d1ca4f05a08ab934f0a83b9", null ],
      [ "kPDM_FifoStatusOverflowCh5", "a00018.html#ggacb5d2d39dd26e12891236046cb2da582a714bd9ec1d4ac3f33eaa05f4ce1f211e", null ],
      [ "kPDM_FifoStatusOverflowCh6", "a00018.html#ggacb5d2d39dd26e12891236046cb2da582a84ff749ce64d3ec48c97d3256b6c7950", null ],
      [ "kPDM_FifoStatusOverflowCh7", "a00018.html#ggacb5d2d39dd26e12891236046cb2da582abd13ca4a02d3b2f6212b11195dda35ec", null ]
    ] ],
    [ "_pdm_output_status", "a00018.html#ga6eed0bbcd52d366e2d36d110703894e6", [
      [ "kPDM_OutputStatusUnderFlowCh0", "a00018.html#gga6eed0bbcd52d366e2d36d110703894e6a7f0ff855e654e5d250102add8ca400a6", null ],
      [ "kPDM_OutputStatusUnderFlowCh1", "a00018.html#gga6eed0bbcd52d366e2d36d110703894e6af7c9a68596e2096b1404132fa24f930e", null ],
      [ "kPDM_OutputStatusUnderFlowCh2", "a00018.html#gga6eed0bbcd52d366e2d36d110703894e6ac65619d72e3bfbbee52e5a530f577cc9", null ],
      [ "kPDM_OutputStatusUnderFlowCh3", "a00018.html#gga6eed0bbcd52d366e2d36d110703894e6a8fe18882b32162c618635f2e9913184c", null ],
      [ "kPDM_OutputStatusUnderFlowCh4", "a00018.html#gga6eed0bbcd52d366e2d36d110703894e6af9242044515ec395bf1dc077b9344df9", null ],
      [ "kPDM_OutputStatusUnderFlowCh5", "a00018.html#gga6eed0bbcd52d366e2d36d110703894e6a153d2577f7150304cc5dbeb8d986449b", null ],
      [ "kPDM_OutputStatusUnderFlowCh6", "a00018.html#gga6eed0bbcd52d366e2d36d110703894e6a264468fc02c7049b4fb7e2e45df70543", null ],
      [ "kPDM_OutputStatusUnderFlowCh7", "a00018.html#gga6eed0bbcd52d366e2d36d110703894e6a5cd2993fc40cb69d226829335b528e47", null ],
      [ "kPDM_OutputStatusOverFlowCh0", "a00018.html#gga6eed0bbcd52d366e2d36d110703894e6aaeae4af1daca52c01a2faa3b55cfc3c1", null ],
      [ "kPDM_OutputStatusOverFlowCh1", "a00018.html#gga6eed0bbcd52d366e2d36d110703894e6a67c944bd32e91a2700bc2ad1c5ca851c", null ],
      [ "kPDM_OutputStatusOverFlowCh2", "a00018.html#gga6eed0bbcd52d366e2d36d110703894e6ab81b2e7f273d99174bedbf9ac792d34a", null ],
      [ "kPDM_OutputStatusOverFlowCh3", "a00018.html#gga6eed0bbcd52d366e2d36d110703894e6aeeaded1f6eaa67d1796631eda767d557", null ],
      [ "kPDM_OutputStatusOverFlowCh4", "a00018.html#gga6eed0bbcd52d366e2d36d110703894e6ae70b6825229f3652c85f6711cee0ca8f", null ],
      [ "kPDM_OutputStatusOverFlowCh5", "a00018.html#gga6eed0bbcd52d366e2d36d110703894e6adcef9ddc0f5fd5e784096ccb5072a08c", null ],
      [ "kPDM_OutputStatusOverFlowCh6", "a00018.html#gga6eed0bbcd52d366e2d36d110703894e6ab2e2040f3df688052542b660a6ca0165", null ],
      [ "kPDM_OutputStatusOverFlowCh7", "a00018.html#gga6eed0bbcd52d366e2d36d110703894e6a8bd9a39601b227cb58f4dc37caf0c346", null ]
    ] ],
    [ "pdm_dc_remover_t", "a00018.html#ga9e2e02b8edb8f9e04e12896f0c755199", [
      [ "kPDM_DcRemoverCutOff21Hz", "a00018.html#gga9e2e02b8edb8f9e04e12896f0c755199a32d4236549399d585226677eaac75b03", null ],
      [ "kPDM_DcRemoverCutOff83Hz", "a00018.html#gga9e2e02b8edb8f9e04e12896f0c755199a9b89a3963e8f707d50f5ec99fc5e7808", null ],
      [ "kPDM_DcRemoverCutOff152Hz", "a00018.html#gga9e2e02b8edb8f9e04e12896f0c755199a6252b4ef2c5a172460f8b16aeaf964e9", null ],
      [ "kPDM_DcRemoverBypass", "a00018.html#gga9e2e02b8edb8f9e04e12896f0c755199a0d5786ced48f1ff00ac3120b08d0c90d", null ]
    ] ],
    [ "pdm_df_quality_mode_t", "a00018.html#gac5ced91393158ac279bca710742b9b62", [
      [ "kPDM_QualityModeMedium", "a00018.html#ggac5ced91393158ac279bca710742b9b62a84043d6ad8ea1fe6eba09fc8e5fcaebe", null ],
      [ "kPDM_QualityModeHigh", "a00018.html#ggac5ced91393158ac279bca710742b9b62ac112c225ead5c446c250aec71f1f9408", null ],
      [ "kPDM_QualityModeLow", "a00018.html#ggac5ced91393158ac279bca710742b9b62ae1f766b8ce770157e2c79e4c2f6e6ad5", null ],
      [ "kPDM_QualityModeVeryLow0", "a00018.html#ggac5ced91393158ac279bca710742b9b62a19358a2451ba371e96d8ca0a829d2199", null ],
      [ "kPDM_QualityModeVeryLow1", "a00018.html#ggac5ced91393158ac279bca710742b9b62a51c7177e4c5ea32f406064603e14275f", null ],
      [ "kPDM_QualityModeVeryLow2", "a00018.html#ggac5ced91393158ac279bca710742b9b62ad82b1a2b6218b68e8eb513b3afd2b0ec", null ]
    ] ],
    [ "_pdm_qulaity_mode_k_factor", "a00018.html#gadcdda0076aca47a3c09b3359f8775892", [
      [ "kPDM_QualityModeHighKFactor", "a00018.html#ggadcdda0076aca47a3c09b3359f8775892a4108a3302dd089d7d1a7030f58a5db05", null ],
      [ "kPDM_QualityModeMediumKFactor", "a00018.html#ggadcdda0076aca47a3c09b3359f8775892a9660780f5198a96abcd7c19b37fbd5b1", null ],
      [ "kPDM_QualityModeLowKFactor", "a00018.html#ggadcdda0076aca47a3c09b3359f8775892a377426e6f63993154e318e30e9208eff", null ],
      [ "kPDM_QualityModeVeryLow2KFactor", "a00018.html#ggadcdda0076aca47a3c09b3359f8775892ae46be552bae52487783705604a97b6db", null ]
    ] ],
    [ "pdm_df_output_gain_t", "a00018.html#gad7a191981f2a4f874d374767858dd987", [
      [ "kPDM_DfOutputGain0", "a00018.html#ggad7a191981f2a4f874d374767858dd987a2c7067b54326db93a927e3bece898884", null ],
      [ "kPDM_DfOutputGain1", "a00018.html#ggad7a191981f2a4f874d374767858dd987a9deb731bcbbc7db8fe05d053d7cff60e", null ],
      [ "kPDM_DfOutputGain2", "a00018.html#ggad7a191981f2a4f874d374767858dd987aaa62179cfdd26906c6936581ff8b8b68", null ],
      [ "kPDM_DfOutputGain3", "a00018.html#ggad7a191981f2a4f874d374767858dd987a5e70473e7c509d2d4136662b99439319", null ],
      [ "kPDM_DfOutputGain4", "a00018.html#ggad7a191981f2a4f874d374767858dd987afb7ccefe007577bfc9fff0710fb18172", null ],
      [ "kPDM_DfOutputGain5", "a00018.html#ggad7a191981f2a4f874d374767858dd987a6fb656ba297ed35a77fd67851cd5afc4", null ],
      [ "kPDM_DfOutputGain6", "a00018.html#ggad7a191981f2a4f874d374767858dd987aec239dd0a51f1c6f4175f230ec5822e0", null ],
      [ "kPDM_DfOutputGain7", "a00018.html#ggad7a191981f2a4f874d374767858dd987af712993b851806046cc16d10429bad51", null ],
      [ "kPDM_DfOutputGain8", "a00018.html#ggad7a191981f2a4f874d374767858dd987ada54570eb839aeb3b8de98613aaf7b0f", null ],
      [ "kPDM_DfOutputGain9", "a00018.html#ggad7a191981f2a4f874d374767858dd987a218b3e3e1ff8d323650229edb438bb8a", null ],
      [ "kPDM_DfOutputGain10", "a00018.html#ggad7a191981f2a4f874d374767858dd987a6bbf9973d59a5a73ac4c7c720812c200", null ],
      [ "kPDM_DfOutputGain11", "a00018.html#ggad7a191981f2a4f874d374767858dd987a2021fcaafcb3dacfcfe7eb4eb8be3f72", null ],
      [ "kPDM_DfOutputGain12", "a00018.html#ggad7a191981f2a4f874d374767858dd987aba677089fc1694e4d215a40c834c4f93", null ],
      [ "kPDM_DfOutputGain13", "a00018.html#ggad7a191981f2a4f874d374767858dd987a3bd48ee15dfa7768d1a4c04ab232ba4e", null ],
      [ "kPDM_DfOutputGain14", "a00018.html#ggad7a191981f2a4f874d374767858dd987adceba5b5f7dc0e8075ea5769d65d9703", null ],
      [ "kPDM_DfOutputGain15", "a00018.html#ggad7a191981f2a4f874d374767858dd987a14b1e675c3b280b4a1824967e215cf5c", null ]
    ] ],
    [ "_pdm_data_width", "a00018.html#ga378d824d2e88465a551d2fea975b1900", [
      [ "kPDM_DataWdith16", "a00018.html#gga378d824d2e88465a551d2fea975b1900a972459be45abeb4f9c087b2528a7990b", null ]
    ] ],
    [ "_pdm_hwvad_interrupt_enable", "a00018.html#gaaea68828df859b872a7a2da26f46698f", [
      [ "kPDM_HwvadErrorInterruptEnable", "a00018.html#ggaaea68828df859b872a7a2da26f46698fad06dcff59ff555f2cc1948343ad1a1b9", null ],
      [ "kPDM_HwvadInterruptEnable", "a00018.html#ggaaea68828df859b872a7a2da26f46698fa02b3d9075a48187c6d3df7df1656895d", null ]
    ] ],
    [ "_pdm_hwvad_int_status", "a00018.html#ga17d5af61d6bcd00fccce920059185637", [
      [ "kPDM_HwvadStatusInputSaturation", "a00018.html#gga17d5af61d6bcd00fccce920059185637a5271ab1017846be91a7c7b0a688a5f74", null ],
      [ "kPDM_HwvadStatusVoiceDetectFlag", "a00018.html#gga17d5af61d6bcd00fccce920059185637a63df78c6781f0fa6f5685856a139dc2e", null ]
    ] ],
    [ "pdm_hwvad_hpf_config_t", "a00018.html#ga574a24aa6095590627e9edb0f31996a6", [
      [ "kPDM_HwvadHpfBypassed", "a00018.html#gga574a24aa6095590627e9edb0f31996a6a6cff26f3dccd1fd8d6ab72a4494b1317", null ],
      [ "kPDM_HwvadHpfCutOffFreq1750Hz", "a00018.html#gga574a24aa6095590627e9edb0f31996a6a1a89bd47b0edc644bc32899f66fd9aa2", null ],
      [ "kPDM_HwvadHpfCutOffFreq215Hz", "a00018.html#gga574a24aa6095590627e9edb0f31996a6acd46128a67ee9757c442293e3190deb5", null ],
      [ "kPDM_HwvadHpfCutOffFreq102Hz", "a00018.html#gga574a24aa6095590627e9edb0f31996a6a9340d96b5b5b7c1351c17f4e684ee027", null ]
    ] ],
    [ "pdm_hwvad_filter_status_t", "a00018.html#ga7e2a346921c43c6a2020365823995e91", [
      [ "kPDM_HwvadInternalFilterNormalOperation", "a00018.html#gga7e2a346921c43c6a2020365823995e91a1aa824e3cb6c912ce37d2bba19705250", null ],
      [ "kPDM_HwvadInternalFilterInitial", "a00018.html#gga7e2a346921c43c6a2020365823995e91a5df43d2b7f1c48fe2f27464eb9eb2904", null ]
    ] ],
    [ "pdm_hwvad_zcd_result_t", "a00018.html#gacad3d73bbc3586b242355329f9123a8a", [
      [ "kPDM_HwvadResultOREnergyBasedDetection", "a00018.html#ggacad3d73bbc3586b242355329f9123a8aa7344fd67845fdda78ddbb2261d30e3ef", null ],
      [ "kPDM_HwvadResultANDEnergyBasedDetection", "a00018.html#ggacad3d73bbc3586b242355329f9123a8aaaa82055ac9d5dfb4302ccda47c84087c", null ]
    ] ],
    [ "PDM_Init", "a00018.html#ga4d1dc4e0ba7f803451c054e3ef2c5eb7", null ],
    [ "PDM_Deinit", "a00018.html#gad5aeae264785108e5c95c5f9b13bfb75", null ],
    [ "PDM_Reset", "a00018.html#gac9aa5c94d426a4ac2f11292c669f8047", null ],
    [ "PDM_Enable", "a00018.html#ga6b97b9514b2e5064bbfa4edd53a14bd4", null ],
    [ "PDM_EnableDoze", "a00018.html#ga3a7fe6f29d96b4ec9fa53e7bd4f3bf9a", null ],
    [ "PDM_EnableDebugMode", "a00018.html#ga1d0180dc1b86a001307022bfc8083b4b", null ],
    [ "PDM_EnableInDebugMode", "a00018.html#ga3a23b0356c0200d2816ef7a7174a4603", null ],
    [ "PDM_EnterLowLeakageMode", "a00018.html#gae942cfa97094516167ef0e3a32049bdb", null ],
    [ "PDM_EnableChannel", "a00018.html#ga4735deeff94de9c50a3a67472987f6ce", null ],
    [ "PDM_SetChannelConfig", "a00018.html#gae4820cd1020b8caef940ba2f4a704b37", null ],
    [ "PDM_SetSampleRateConfig", "a00018.html#ga1274f726f30835cbb08fb95604c3266b", null ],
    [ "PDM_SetSampleRate", "a00018.html#ga4381e3b465583d65d9a54be5df8635d9", null ],
    [ "PDM_GetInstance", "a00018.html#ga828e89753d0800438029bb925f4b21cd", null ],
    [ "PDM_GetStatus", "a00018.html#gaa12ab3c02429bc0a314cde209bd33670", null ],
    [ "PDM_GetFifoStatus", "a00018.html#gaa27634823720250e973180a9a6805836", null ],
    [ "PDM_GetOutputStatus", "a00018.html#gac2bfe5d4e4b29cde351bc385ffd111ec", null ],
    [ "PDM_ClearStatus", "a00018.html#gaaba9304755fd579a41ef17d93afd17f5", null ],
    [ "PDM_ClearFIFOStatus", "a00018.html#gaf2f70d10177a5f9454558e48b86414c1", null ],
    [ "PDM_ClearOutputStatus", "a00018.html#ga6609f867fb5884dec3d57dda8844d40e", null ],
    [ "PDM_EnableInterrupts", "a00018.html#ga270d608a1f9d84fce0a645521a68d28f", null ],
    [ "PDM_DisableInterrupts", "a00018.html#ga02dcfe54f1c1ceb2d88a518d686889d6", null ],
    [ "PDM_EnableDMA", "a00018.html#ga548eef5e24cc3531ac569ec4fe655466", null ],
    [ "PDM_GetDataRegisterAddress", "a00018.html#ga667781fd3e6774b14426cd8190539572", null ],
    [ "PDM_ReadFifo", "a00018.html#gadde217f06f92f47ff53019886484c2f1", null ],
    [ "PDM_SetChannelGain", "a00018.html#ga2ef68273c6842bb86934f73abf5d8619", null ],
    [ "PDM_SetHwvadConfig", "a00018.html#ga27652667902f3259ff618fce1414410e", null ],
    [ "PDM_ForceHwvadOutputDisable", "a00018.html#gae810ba57ae4d67636623376d244ffc2b", null ],
    [ "PDM_ResetHwvad", "a00018.html#ga95356e503178292eafd366438da3250a", null ],
    [ "PDM_EnableHwvad", "a00018.html#ga73af89a47ad878f37dbeebebf7f55851", null ],
    [ "PDM_EnableHwvadInterrupts", "a00018.html#ga9be15a0b132695a431740aaeeac18037", null ],
    [ "PDM_DisableHwvadInterrupts", "a00018.html#gafc16fa20936b04a87334e63c6d4ae724", null ],
    [ "PDM_ClearHwvadInterruptStatusFlags", "a00018.html#gaf02a53c6bf443b6e14f0f7c8943272af", null ],
    [ "PDM_GetHwvadInterruptStatusFlags", "a00018.html#ga88f3fbe52384b147184537f62bc8c6e2", null ],
    [ "PDM_GetHwvadInitialFlag", "a00018.html#gaf3ccf73f5ee3408e175a4477b34bce0b", null ],
    [ "PDM_GetHwvadVoiceDetectedFlag", "a00018.html#ga4ab28bad8662663117e8dd6514e9271c", null ],
    [ "PDM_EnableHwvadSignalFilter", "a00018.html#ga8d8a769b44f34fa6a8a69d9e2e2ed24c", null ],
    [ "PDM_SetHwvadSignalFilterConfig", "a00018.html#ga341d08017c53414715394c4e389e3207", null ],
    [ "PDM_SetHwvadNoiseFilterConfig", "a00018.html#ga01c74a4b0badddd09236a4c2d6da506c", null ],
    [ "PDM_EnableHwvadZeroCrossDetector", "a00018.html#gad089911b948933e01fe016e697b8f14d", null ],
    [ "PDM_SetHwvadZeroCrossDetectorConfig", "a00018.html#ga18c57fb8d705960b46d16139acc7c25d", null ],
    [ "PDM_GetNoiseData", "a00018.html#ga875cb2a28b7a3e17e0d802ca187edd9e", null ],
    [ "PDM_SetHwvadInternalFilterStatus", "a00018.html#gae03514f220df836a75b84980d817919f", null ],
    [ "PDM_SetHwvadInEnvelopeBasedMode", "a00018.html#gaf8577c2175f951d1a167bbf72285824a", null ],
    [ "PDM_SetHwvadInEnergyBasedMode", "a00018.html#gaa8cc50024bfa7741936df081c6952227", null ],
    [ "PDM_EnableHwvadInterruptCallback", "a00018.html#ga31859f85d59073a5a0cb55c13b3d5e37", null ],
    [ "PDM_TransferCreateHandle", "a00018.html#ga592db7e89ce085fab3ad50a95d9e203a", null ],
    [ "PDM_TransferSetChannelConfig", "a00018.html#gaad4d95fc6dabf22e7bb5f6011cfd8f6f", null ],
    [ "PDM_TransferReceiveNonBlocking", "a00018.html#ga619b2cd8f98911c261d034965195d2d9", null ],
    [ "PDM_TransferAbortReceive", "a00018.html#gaa25c1581a916d75382d5a2b83ee4ed10", null ],
    [ "PDM_TransferHandleIRQ", "a00018.html#ga17c9de928086fb06752de91b6b0e1b94", null ]
];